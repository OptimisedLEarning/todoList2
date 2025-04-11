// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin"); // step 1: import plugin

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // this clears old files in dist
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.html", // step 2: use our HTML file as template
    }),
  ],
};
