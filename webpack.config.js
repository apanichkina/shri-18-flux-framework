const path = require('path');

const PUBLIC_PATH = path.join(__dirname, 'public');

module.exports = {
  mode: 'development',
  cache: false,
  entry: `${PUBLIC_PATH}/index.ts`,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: __dirname,
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        enforce: 'pre',
        use: [
          {
            loader: 'ts-loader',
          },
          {
            loader: 'tslint-loader',
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              useCache: true,
              forceIsolatedModules: true,
              reportFiles: ['./src/**/*.{ts}'],
            },
          },
        ],
      },
    ],
  }
};
