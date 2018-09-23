const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../public'),
    publicPath: 'http://localhost:9000/dist/',
    hotOnly: true,
    port: 9000
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: ['babel-loader']
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
