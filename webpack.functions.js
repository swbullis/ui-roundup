const webpack = require('webpack');

/* https://github.com/node-formidable/formidable/issues/337 */
module.exports = {
  plugins: [ new webpack.DefinePlugin({ "global.GENTLY": false }) ]
};