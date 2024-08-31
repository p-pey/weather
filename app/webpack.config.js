const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path =  require('path');
const pkgJsonDeps = require('./package.json').dependencies;

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
