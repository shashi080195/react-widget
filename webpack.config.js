module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: {
          loader: "css-loader",
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: {
          loader: "svg-inline-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: { loader: "file-loader" },
      },
    ],
  },
  output: {
    library: "widgetApp",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
};
