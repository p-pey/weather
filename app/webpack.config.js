const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path =  require('path');
const pkgJsonDeps = require('./package.json').dependencies;

/**
 * @type {import('webpack').Configuration}
 * **/

module.exports = {
  entry: './src/index.tsx',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'app',
      filename: 'remoteEntry.js',
      exposes: {
        './weather': './src/components/root',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: pkgJsonDeps['react'] },
        'react-dom': { singleton: true, eager: true, requiredVersion: pkgJsonDeps['react-dom'] },
      },
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public')
    },
    compress: true,
    port: 4001,
  },
};
