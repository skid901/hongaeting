const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addWebpackAlias,
} = require('customize-cra');

const path = require('path');

const alias = {
  src: path.resolve(__dirname, 'src/'),
  component: path.resolve(__dirname, 'src/component/'),
  resource: path.resolve(__dirname, 'src/resource/'),
  store: path.resolve(__dirname, 'src/store/'),
  repository: path.resolve(__dirname, 'src/repository/'),
};

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(alias),

  // Adds the provided alias info into webpack's alias section
  addWebpackAlias(),
);
