const path = require('path');
const pkg = require('./package.json');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "main.js",
    library: pkg.name,
    libraryTarget: "commonjs2"
  },
  // optimization: {
  //   // We no not want to minimize our code.
  //   minimize: false
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: [
          "/src/**/*.test.ts",
          "/src/**/*.test.tsx",
          "/node_modules",
          "/dist"
        ],
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    extensions: ['.ts','.tsx', '.js']
  },
  target: 'node',
  externals: [nodeExternals()],
};