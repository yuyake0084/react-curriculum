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
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loaders: 'babel',
        options: {
          presets: [['es2015', { modules: false }], 'react', 'stage-0'],
        },
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

