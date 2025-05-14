// webpack.config.js del mf-javascript-react
const path = require("path");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename:     "main.js",
    path:         path.resolve(__dirname, "dist"),
    publicPath:   "/",
    libraryTarget: "system"
  },
  mode: "development",
  externals: {
    react:            "react",
    "react-dom":      "react-dom",
    "react-dom/client": "react-dom/client", // aunque no lo uses ya
    "single-spa":     "single-spa",
    "app-mf-javascript": "app-mf-javascript",
  },
  module: {
    rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  devServer: {
    static: { directory: path.resolve(__dirname, "dist") },
    historyApiFallback: true,
    port: 9002,
    headers: { "Access-Control-Allow-Origin": "*" }
  },
  resolve: { extensions: [".js", ".jsx"] }
};
