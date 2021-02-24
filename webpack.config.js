const path = require('path');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "api.server.js"
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
    fs: 'empty'
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [      
      /// mjml
      { test: /\.mjml$/, loader: 'mjml-loader' },
      // JavaScript      
      {        
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },	
};
