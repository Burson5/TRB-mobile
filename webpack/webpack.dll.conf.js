const dirs = require('./configs/dirs');
const path = require('path');
const webpack = require('webpack');
const DLLNameString = 'dll_[name]';
module.exports = {
  mode: 'production',
  entry: {
    frame: ['react', 'react-dom', 'axios'],
    ui: ['antd-mobile'],
  },
  output: {
    library: DLLNameString,
    path: dirs.dll,
    filename: '[name].dll.js',
  },
  plugins: [
    new webpack.DllPlugin({
      name: DLLNameString,
      path: path.join(dirs.dll, '[name].manifest.json'),
    }),
    new webpack.BannerPlugin(
      `Last update: ${new Date().toString()}`
    ),
  ],
};
