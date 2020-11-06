var path = require('path')
var merge = require('webpack-merge')


function resolve(name) {
  return path.join(__dirname, name)
}

module.exports = {
  configureWebpack: {
    devtool: 'source-map',
    
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
        'store': '@/store',
        'i18n': '@/i18n',
        'ai': '@/ai'
      }
    }
  },

  chainWebpack: config => {
    config
    // Interact with entry points
      .entry('ai')
      .add(resolve('src/ai/bridge.js'))
      .end()
    // Modify output settings
      .output
      .path(resolve('dist'))
      .filename('[name].bundle.js')
      .globalObject('this') //https://github.com/webpack/webpack/issues/6642

    config.devtool(false)


    // exclude ai.js
    config
      .plugin('html')
      .tap(args => {
        args[0].excludeAssets = [/ai.*.js/]
        return args
      })

    //config.plugin('assets')
    //  .use(HtmlWebpackExcludeAssetsPlugin)

    config.optimization
      .splitChunks(false) // will cause webworker not work if enable this

  },
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  runtimeCompiler: false
}
