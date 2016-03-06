var path = require('path')

module.exports = {
  entry: './dev/main.js',
  output: {
    path: './scripts/',
    filename: 'bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      "root": path.resolve(__dirname, 'dev', 'src')
    }
  },
  devtool: 'source-map'
};
