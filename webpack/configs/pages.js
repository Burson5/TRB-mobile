const path = require("path");
const glob = require("glob");
const fs = require("fs");
const dirs = require("./dirs");

const entryFileReg = /([\w]+)\/index.tsx/;
const templateHtmlList = [];
const entryConfig = {};
glob.sync(path.join(dirs.src, "/pages/*/index.tsx")).forEach(entryFile => {
  let regResult = entryFile.match(entryFileReg);
  let entryName = regResult[1];
  let template = path.join(dirs.src, `/pages/${entryName}/index.ejs`);
  if (!fs.existsSync(template)) {
    template = path.join(dirs.src, "/pages/common.ejs");
  }
  // 配置用于给html-webpack-plugin 插件指定对应模板和生成的文件名称
  templateHtmlList.push({
    name: entryName,
    template
  });
  entryConfig[entryName] = entryFile;
  return entryFile;
});

module.exports = {
  entryConfig,
  templateHtmlList
};
