const dirs = require('./configs/dirs');
const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin');
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');
const { templateHtmlList, entryConfig } = require('./configs/pages');
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
    publicPath: 'fileasset:///',
    filename: `js/bundle_[name].min.js`,
  },
  plugins: [
    ...DefaultPlugins,
    ...htmlWebpackPlugins,
    new DllReferencePlugin({
      // 描述 框架相关 动态链接库的文件内容
      manifest: require(path.join(dirs.dll, 'frame.manifest.json')),
    }),
    new DllReferencePlugin({
      // 描述 ui框架相关 动态链接库的文件内容
      manifest: require(path.join(dirs.dll, 'ui.manifest.json')),
    }),
    new AddAssetHtmlWebpackPlugin({
      typeOfAsset: 'js',
      includeSourcemap: false,
      filepath: path.join(dirs.dll, '**/*.js'),
      publicPath: `${`fileasset:///`}js`, // 绝对路径：'/js',
      outputPath: './js',
    }),
    new webpack.BannerPlugin(
      `This file is created by Super Browser, Last update: ${new Date().toString()}`
    ),
    new ParallelUglifyPlugin({
      test: /.(j|t)sx?$/g,
      uglifyJs: {
        cacgeDir: '.cache/',
        output: {
          beautify: false,
          commons: false,
        },
        compress: {
          warnings: false,
          drop_console: true,
          collapse_vars: true,
          reduce_vars: true,
        },
        sourceMap: false,
      },
    }),
  ],
};
