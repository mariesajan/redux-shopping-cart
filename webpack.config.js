module.exports = {
  context: __dirname,
  entry: './index.js',
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react', 'stage-0'],
        plugins: ['react-html-attrs']
      }
    }]
  },
  output: {
    pathname: __dirname,
    filename: 'client.min.js'
  }
}
