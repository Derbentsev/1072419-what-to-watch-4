const path = require(`path`);
const webpack = require(`webpack`);
const MomentLocalesPlugin = require(`moment-locales-webpack-plugin`);

module.exports = (env) => {
  return {
    mode: env === `dev` ? `development` : `production`,
    entry: `./src/index.tsx`,
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
        },
        {
          test: /\.(tsx|ts)?$/,
          exclude: /node_modules/,
          loader: `ts-loader`
        },
      ],
    },
    devtool: `source-map`,
    resolve: {
      modules: [`node_modules`, path.resolve(path.join(__dirname, `public`))],
      extensions: [`.js`, `.ts`, `.tsx`, `.json`],
      alias: {
        '@components': path.resolve(__dirname, `./src/components/`),
        '@consts': path.resolve(__dirname, `./src/consts/`),
        '@adapters': path.resolve(__dirname, `./src/adapters/`),
        '@hocs': path.resolve(__dirname, `./src/hocs/`),
        '@utils': path.resolve(__dirname, `./src/utils/`),
        '@src': path.resolve(__dirname, `./src/`),
        '@reducer': path.resolve(__dirname, `./src/reducer/`),
        '@api': path.resolve(__dirname, `./src/api/`),
        '@history': path.resolve(__dirname, `./src/history/`),
        '@types': path.resolve(__dirname, `./src/types/`),
      }
    },
    plugins: [
      new MomentLocalesPlugin(),
      new webpack.ProvidePlugin({
        React: `react`,
        PropTypes: `prop-types`,
        BrowserRouter: [`react-router-dom`, `BrowserRouter`],
        Route: [`react-router-dom`, `Route`],
        Router: [`react-router-dom`, `Router`],
        Link: [`react-router-dom`, `Link`],
        Switch: [`react-router-dom`, `Switch`],
      }),
    ]
  };
};
