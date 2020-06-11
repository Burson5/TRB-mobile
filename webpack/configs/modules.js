const dirs = require('./dirs');
const postcssCssnext = require('postcss-cssnext');
const postcssPxToViewport = require('postcss-px-to-viewport');

module.exports = {
  rules: [
    {
      test: /\.(j|t)sx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      include: dirs.src,
    },
    {
      test: /\.less/,
      loader: [
        'style-loader',
        'css-loader',
        'less-loader?javascriptEnabled=true',
      ],
    },
    {
      test: /\.(json|conf)$/,
      exclude: /node_modules/,
      loader: 'json-loader',
    },
    {
      test: /\.(css)$/,
      // exclude: /node_modules/,
      loader: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(scss)$/,
      exclude: /node_modules/,
      loader: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: true,
            modules: {
              localIdentName: '[local]__[name]-[hash:base64:8]',
            },
          },
        },
        // {
        //   loader: 'postcss-loader',
        //   options: {
        //     ident: 'postcss',
        //     plugins: loader => [
        //       postcssCssnext(),
        //       postcssPxToViewport({
        //         // 以iphone6sp为基准，让UI出的稿是以以下的宽高导出文档 750*1334
        //         viewportWidth: 750, // (Number) The width of the viewport.
        //         viewportHeight: 1334, // (Number) The height of the viewport.
        //         unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to.
        //         viewportUnit: 'vw', // (String) Expected units.
        //         selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px.
        //         minPixelValue: 1, // (Number) Set the minimum pixel value to replace.
        //         mediaQuery: false, // (Boolean) Allow px to be converted in media queries.
        //         exclude: /(\/|\\)(node_modules)(\/|\\)/,
        //       }),
        //     ],
        //   },
        // },
        'sass-loader',
      ],
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 1000000,
            name: 'images/[name].[ext]',
          },
        },
      ],
    },
  ],
};
