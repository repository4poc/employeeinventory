const path = require("path");
const webpack = require("webpack");

const APP_DIR = path.resolve(__dirname, "src");
const PUBLIC_DIR = path.resolve(__dirname, "public");

const config = {
  mode: "development",
  entry: APP_DIR + "/index.js",
  devServer: {
    static: {
      directory: PUBLIC_DIR,
    },
    compress: true,
    port: 9000,
  },
  output: {
    path: PUBLIC_DIR,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/,
        include: path.resolve(__dirname, "src"),
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-env",
                  {
                    targets: "defaults",
                  },
                ],
                "@babel/preset-react",
              ],
            },
          },
        ],
      },
    ],
  },
};

module.exports = config;
