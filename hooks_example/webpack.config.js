const webpack = require('webpack'); 

module.exports = {
    entry: [
      '@babel/polyfill',
      './src/index.js'
    ],
    module: {
        rules: [
          {
            test: /\.m?(js|jsx)$/,
            resolve: {
                extensions: ['*',".js", ".jsx"]
            },
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                presets: ['@babel/preset-env']
                }
            }
          },
          {
            test: /\.(sa|sc|c)ss$/,
            use: [
              'style-loader', //creates style nodes from JS strings
              'css-loader', //translates CSS into CommonJS
              'sass-loader' //compiles Sass to css using node sass by default
            ],
            exclude: /node_modues/
          }
        ]
    },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ], 
    devServer: {
      contentBase: './src/',
      hot: true
    }
  };

