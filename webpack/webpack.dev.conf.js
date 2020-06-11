const dirs = require('./configs/dirs');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { templateHtmlList, entryConfig } = require('./configs/pages');
const webpackConfigs = require('./configs/index');

const DefaultPlugins = require('./configs/plugins');
const htmlWebpackPlugins = [];

templateHtmlList.forEach(templateHtml => {
  let config = {
    chunks: [templateHtml.name],
    // chunksSortMode: "manual",
    name: templateHtml.name,
    template: templateHtml.template,
    filename: `${templateHtml.name}.html`,
  };
  htmlWebpackPlugins.push(new HtmlWebpackPlugin(config));
});
module.exports = {
  ...baseConfig,
  entry: entryConfig,
  output: {
    path: dirs.dist,
    filename: 'js/bundle_[name].min.js',
  },
  devServer: {
    port: webpackConfigs.port,
    host: '0.0.0.0',
    // 关闭host校验，用于内网穿透映射
    disableHostCheck: true,
    // https: true
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  plugins: [
    ...DefaultPlugins,
    ...htmlWebpackPlugins,
    new webpack.HotModuleReplacementPlugin(),
  ],
};
