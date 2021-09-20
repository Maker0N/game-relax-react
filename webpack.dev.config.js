const { resolve } = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'js/[name].bundle.js',
    path: resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    open: true,
    port: 8080,
    host: 'localhost',
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
        // use: {
        //   loader: 'babel-loader',
        //   options: {
        //     presets: ['@babel/presets-env', '@babel/presets-react']
        //   }
        // }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${__dirname}/src/index.html`,
          to: 'index.html'
        }
      ]
    })
  ]
}

module.exports = config
