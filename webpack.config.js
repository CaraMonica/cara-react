module.exports = {
  entry: "./js/index.js",
  output: {
    filename: "./bundle.js"
  },
  watchOptions: {
    aggregateTimeout: 200,
    poll: 1000
  },
  devServer: {
    writeToDisk: true,
    historyApiFallback: {
      index: './index.html'
    }
  },
  optimization: {
     splitChunks: {
       chunks: 'async',
     },
   },

  mode : "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [ 'css-loader'],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/react'],
            plugins: ["@babel/plugin-proposal-class-properties"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  },
}
