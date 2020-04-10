module.exports = {
    proxyTable: {
        // 这里可以理解为使用"/api" 代替 "target" 里的地址，
        // 比如说我们要调用的地址是 http://www.example.com/api/list,   则写成 /api/list 就可以了
        '/api': {
            target: 'http://localhost:9000',  // 你请求的api地址
            secure: false,                    // 如果是https接口，需要配置这个参数
            //这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里面的host
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
            //重写路径，其实这里就是和上面的target拼接起来
        }
    }
}
