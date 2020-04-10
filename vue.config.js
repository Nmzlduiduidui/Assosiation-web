
const path = require('path');

// const port = process.env.port || process.env.npm_config_port || 8088 // 端口

//设置路径别名
function resolve(dir) {
    return path.join(__dirname, dir);
}

// 关闭eslint的方法
module.exports = {
    lintOnSave: false,
    // webpack-dev-server 相关配置
    devServer: {
        sockHost: 'http://localhost:8088/',
        disableHostCheck: true
    },
    //路径别名
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            // 需要重启 IDE
            .set('styles', resolve('src/assets'))
        // 这里只写了两个个，你可以自己再加，按这种格式.set('', resolve(''))

        // set svg-sprite-loader插件：创建svg图，将导入的SVG文件自动生成为symbol标签并插入进html中。
       config.module
            .rule('svg')
            .exclude.add(resolve('src/assets/icons'))
            .end()
        config.module
            .rule('icons')
            .test(/\.svg$/)
            .include.add(resolve('src/assets/icons'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
            .end()

    }


}