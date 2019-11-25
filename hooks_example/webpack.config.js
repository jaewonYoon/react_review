const webpack = require('webpack'); 

module.exports = {
    entry: [
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

