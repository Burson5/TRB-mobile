const modules = require("./configs/modules");
const dirs = require("./configs/dirs");

module.exports = {
  resolve: {
    // 尽可能减少后缀尝试的可能性
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "~": dirs.src
    }
  },
  module: {
    rules: modules.rules,
    noParse: [/react\.*\.min\.js$/]
  }
};
