const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.join(__dirname, "/dist"), // the bundle output path
    filename: "main.js", // the name of the bundle
  },
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html", // to import index.html file inside index.js
    }),
  ],
  devServer: {
    port: 3002,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "basketRemote",
      filename: "remoteEntry.js",
      exposes: {
        "./RemoteComponent": "./src/components/RemoteComponent.tsx",
      },
      remotes: {
        host: "host@http://localhost:3000/_next/static/chunks/remoteEntry.js",
      },
    }),
  ],
};
