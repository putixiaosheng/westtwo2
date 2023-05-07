const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.module.rule('svg').exclude.add(/@element-plus[\\/]icons/)
    config.module.rule('icons').test(/\.svg$/).include.add(/@element-plus[\\/]icons/).end()
      .use('svg-sprite-loader').loader('svg-sprite-loader').end()
      .use('svgo-loader').loader('svgo-loader')
  },
  transpileDependencies: true,
  lintOnSave: false,
  
/*    devServer: {
    port:8080,
    host:'127.0.0.1',
    proxy: {
      "": {
        target: "http://localhost:8080",
        changeOrigin: true,
      }
    }
},  */
})

