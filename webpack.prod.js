const { merge } = require("webpack-merge");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production",
  plugins: [new BundleAnalyzerPlugin()],
});
