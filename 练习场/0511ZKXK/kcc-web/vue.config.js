const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // 设置路径别名

    config
      .plugin('html')
      .tap(args => {
        args[0].title = '中科心客——创投基金—预见独角兽计划—科技成果转移转化'
        return args
      })
  },

  publicPath: process.env.NODE_ENV !== 'development' ? './' : '/', // 生成路径

  devServer: {
    proxy: (() => {
      if (!process.env.VUE_APP_BACK_END_URL) {
        return false
      } else {
        // 代理转发
        const _basePath = process.env.VUE_APP_BASE_PATH.endsWith('/')
          ? process.env.VUE_APP_BASE_PATH
          : process.env.VUE_APP_BASE_PATH + '/'
        const _path = _basePath + 'visitor/'
        let result = {}
        result[_path] = {
          target: process.env.VUE_APP_BACK_END_URL,
          changeOrigin: true,
          pathRewrite: {}
        }
        result[_path].pathRewrite['^' + _path] = '/'
        result={
          '/visitor':{
            target:'http://www.thinkerwork.com',
            changeOrigin:true,
            ws:true,
            pathRewrite:{
              '^/visitor':'/api/visitor',
            }
          }
        }
        return result
      }
    })()
  }
}
