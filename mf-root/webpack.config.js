const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { externals } = require("../mf-javascript-react/webpack.config");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    libraryTarget: "system", // <- CLAVE
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: {
          loader: "raw-loader",
        },
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      filename: "index.html",
    }),
  ],
  externals: {
    "react": "react",
    "react-dom": "react-dom",
    "react-dom/client": "react-dom/client",
    "single-spa": "single-spa"
  },  
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    historyApiFallback: true,
    port: 9000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
  },
};
