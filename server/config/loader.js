/*
* @Author: insane.luojie
* @Date:   2017-09-27 10:16:06
* @Last Modified by:   insane.luojie
* @Last Modified time: 2017-09-28 18:47:32
*/

export function createLoaders() {
   /**
   * loader rules
   * @type {}
   */
  let rules = [];

  let postcssLoader = {
    loader: 'postcss-loader',
    options: this.options.build.postcss
  }

  Array.prototype.push.apply(rules, [{
      test: /\.json$/,
      loader: 'json-loader'
  }, {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude (str) {
      return /node_modules/.test(str)
    },
    options: this.options.babelOptions
  }, {
    test: /\.vue$/,
    loader: 'vue-loader',
    options: this.vueLoader()
  }, {
    test: /\.css$/,
    loaders: ['file-loader', 'css-loader', postcssLoader]
  }, {
    test: /\.less$/,
    loaders: ['file-loader', 'css-loader', postcssLoader, 'less-loader']
  }, {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loaders: [
        'file-loader?limit=10000&name=imgs/[hash:7].[ext]',
        'image-webpack-loader'
      ]
  }]);

  return rules;
}