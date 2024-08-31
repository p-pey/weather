const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;
const path =  require('path');
const pkgJsonDeps = require('./package.json').dependencies;
require('dotenv').config({
  path: path.resolve(__dirname, '.env')
});

/**
 * @type {import('webpack').Configuration}
 **/
module.exports = {
  entry: './src/index.tsx',
  mode: "development",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'auto'
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
    }),
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
    hot: false,
    liveReload: true,
    open: false,
    watchFiles: ['src/*'],
    compress: true,
    port: 4001,
  },
};
