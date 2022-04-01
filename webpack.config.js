module.exports = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    main: './server/components/App.jsx',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },
  output: {
    filename: 'ssr.js',
    path: __dirname + '/server/assets',
  },
};
