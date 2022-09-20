const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "index.js"),
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].js",
  },
  target: "web",
  devServer: {
    port: 3000,
    static: ["./public"],
    open: false,
    hot: true,
    liveReload: false,
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
