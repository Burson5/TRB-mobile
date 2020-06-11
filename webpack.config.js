const webpack = require('webpack');
const webpackConfigs = require('./webpack/configs/index');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env, args) => {
  console.log(webpackConfigs);
  // console.log(env);
  let webpackConfig;
  if (args.host) {
    // 有host表示是用webpack-dev-server启动的本地服务，则使用dev的webpack配置
    webpackConfig = require('./webpack/webpack.dev.conf');
    webpackConfig.mode = 'development';
  } else {
    webpackConfig = require('./webpack/webpack.prod.conf');
    webpackConfig.mode = 'production';
  }

  if (
    webpackConfig &&
    webpackConfig.plugins &&
    Array.isArray(webpackConfig.plugins)
  ) {
    const API_ENV = env || (args.host ? 'dev' : 'production');
    if (API_ENV !== 'production') {
      webpackConfig.devtool = '#cheap-module-eval-source-map';
    }
    webpackConfig.plugins.push(
      new webpack.DefinePlugin({
        'process.env.API_ENV': JSON.stringify(API_ENV), // 这里不需要去定义 process.env.NODE_ENV，交给 CLI -p 和 webpack mode 去自动设置
        'process.env.USE_LOCAL_CONFIG': JSON.stringify(
          args['use-local-config']
        ), // api环境用自己配置的，不用客户端传来的，便于调试各个环境
        'process.env.LOG': !!args.log, // 可以配置日志的显示与否
      })
    );

    if (args.anal) {
      // --anal=1 输出包的体积分析
      webpackConfig.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerPort: 8088,
          openAnalyzer: false,
        })
      );
    }
  }
  return webpackConfig;
};
