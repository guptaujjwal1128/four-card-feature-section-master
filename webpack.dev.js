const path = require("path");
const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    watchFiles: ["src/template.html"],
  },
});
