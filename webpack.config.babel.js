import express from 'express';
import path from 'path';

export default {
  entry: {
    main: './src/index.js',
  },

  output: {
    path: `${__dirname}/public/assets/`,
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: './public',
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel',
      }
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },
};

