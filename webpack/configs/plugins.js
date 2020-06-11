const HappyPack = require("happypack");
const os = require("os");
const plugins = [];
const happyPackThreadPool = HappyPack.ThreadPool({
  size: os.cpus().length
});

/**
 * happyPack
 * 多个node进程同时编译
 */
plugins.push(
  new HappyPack({
    id: "babel",
    threadPool: happyPackThreadPool,
    verbose: false,
    loaders: [
      {
        loader: "babel-loader",
        options: {
          babelrc: true,
          cacheDirectory: true
        }
      }
    ]
  })
);
module.exports = plugins;
