var path = require('path');
var webpack = require('webpack');
var node_modules = path.resolve(__dirname, 'node_modules');
// var pathToReact = path.resolve(node_modules, 'react/dist/react-with-addons.js');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    './assets/js/containers/app.js'
  ],
  output: {
    path: 'view/js/',
    filename: 'bundle.js'
  },
  // 表示这个依赖项是外部lib，遇到require它不需要编译，
  // 且在浏览器端对应window.React
  externals: {
    //'react': 'window.React'
  },
  resolve: {
    // alias: {
    //   'react': pathToReact
    // },
    extensions:['','.js','.jsx']
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        {
          test: /\.(js|jsx)$/,
          loaders: ['react-hot','babel'],
          exclude: /node_modules/,
          include: __dirname
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          include: __dirname,
          loader: 'babel',
          query: {
            presets: ['es2015','react']
          } 
        }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
