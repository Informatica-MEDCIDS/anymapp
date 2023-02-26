// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require("path");
const webpack = require("webpack"); //to access built-in plugins
var WebpackObfuscator = require("webpack-obfuscator");

const isDevelopment = process.env.NODE_ENV == "development";
const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

module.exports = {
  entry: "./src/anymapp.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "anymapp.js",
  },
  devtool: isDevelopment ? "inline-source-map" : false,
  mode: isDevelopment ? "development" : "production",
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    !isDevelopment &&
      new WebpackObfuscator(
        {
          rotateStringArray: true,
          optionsPreset: "high-obfuscation",
        },
        ["excluded_bundle_name.js"]
      ),
    new webpack.ProgressPlugin(handler),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        loader: "babel-loader",
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ],
  },
  // optimization: {
  //   minimize: true,
  //   mangleExports: "size",
  // }
};
