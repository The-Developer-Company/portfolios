

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // Your main React app entry file
  output: {
    filename: 'bundle.js', // The name of the bundled JavaScript file
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Your original index.html file
      filename: 'index.html', // The name of the output HTML file
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true,
            },
          },
        ],
      },
    ],
  },
};