const path = require('path');
const { paths } = require('react-app-rewired');
const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  return alias({
    '@component': path.resolve(`${paths.appSrc}/component`),
    '@router': path.resolve(`${paths.appSrc}/router`),
    '@page': path.resolve(`${paths.appSrc}/page`),
    '@utils': path.resolve(`${paths.appSrc}/utils`),
    '@lib': path.resolve(`${paths.appSrc}/lib`),
  })(config)
};
