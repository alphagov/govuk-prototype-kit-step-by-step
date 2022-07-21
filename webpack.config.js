const path = require('path');

module.exports = {
  entry: './javascripts/step-by-step-nav.js',
  mode: 'production',
  devtool: 'source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      jquery: "jquery/src/jquery"
    }
  }
};
