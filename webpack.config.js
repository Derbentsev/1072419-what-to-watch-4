const path = require(`path`);
const webpack = require(`webpack`);

module.exports = (env) => {
  return {
    mode: env === `dev` ? `development` : `production`,
    entry: `./src/index.jsx`,
    output: {
      filename: `bundle.js`,
      path: path.join(__dirname, `public`)
    },
    devServer: {
      contentBase: path.join(__dirname, `public`),
      open: true,
      inline: true,
      port: 1337,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: `babel-loader`,
          },
        }
      ],
    },
    devtool: `source-map`,
    resolve: {
      modules: [`node_modules`, path.resolve(path.join(__dirname, `public`))],
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.webm'],
      alias: {
        '@components': path.resolve(__dirname, `./src/components/`),
        '@consts': path.resolve(__dirname, `./src/consts/`),
        '@mocks': path.resolve(__dirname, `./src/mocks/`),
        '@hocs': path.resolve(__dirname, `./src/hocs/`),
        '@utils': path.resolve(__dirname, `./src/utils/`),
        '@src': path.resolve(__dirname, `./src/`),
        '@reducer': path.resolve(__dirname, `./src/reducer/`),
        '@api': path.resolve(__dirname, `./src/api/`),
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: `react`,
        PropTypes: `prop-types`,
        BrowserRouter: [`react-router-dom`, `BrowserRouter`],
        Route: [`react-router-dom`, `Route`],
        Switch: [`react-router-dom`, `Switch`],
      }),
    ]
  };
};
