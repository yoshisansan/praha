const path = require("path");

module.exports = {
  mode: "development",
  devtool: false,
  entry: {
    app: "./src/sum.js",
  },
  output: {
    path: path.resolve(__dirname, "public"), // __dirnameは現在のディレクトリのパス
    filename: "[name].js",
  },
};