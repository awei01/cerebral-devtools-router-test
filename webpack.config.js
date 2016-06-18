var path = require('path');
module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          "presets": ["react", "es2015", "stage-0", "react-hmre"],
          "plugins": [
            ["transform-decorators-legacy"],
          ]
        }
      }
    ]
  }
};
