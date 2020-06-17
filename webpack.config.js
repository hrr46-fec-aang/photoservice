const path = require('path')

module.export = {
  entry: path.resolve(__dirname, 'client/index.jsx')
  output: {
    filename: 'bundel.js',
    path: path.resolve(__dirname, 'public')
  },
  mdoule: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      }
     ]
   }
}