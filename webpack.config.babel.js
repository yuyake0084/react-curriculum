import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export const src = path.resolve(__dirname, './src/');

export default {
  entry: {
    app: [
      `${src}/javascripts/index.js`,
      `${src}/stylesheets/app.css`,
    ]
  },

  output: {
    path: `${__dirname}/public/assets`,
    filename: 'javascripts/bundle.js'
  },

  plugins: [
    new ExtractTextPlugin({
      filename: 'stylesheets/app.css',
    })
  ],

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
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style',
          use: [
            'css',
            {
              loader: 'postcss',
              options: {
                sourceMap: true,
                plugins: () => [
                  require('postcss-import')(),
                  require('postcss-nested')(),
                  require('postcss-custom-media')(),
                  require('postcss-custom-properties')(),
                  require('autoprefixer')(),
                ],
              }
            },
          ]
        }),
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },

  resolveLoader: {
    moduleExtensions: ['-loader']
  },
};

