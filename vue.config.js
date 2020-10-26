module.exports = {
        devServer: {
            host: "0.0.0.0",
            port: "8888",
            open: true,
            proxy: {
                "/api": {
                    target: "https://x.dscmall.cn/api/",
                    changeOrigin: true,
                    pathRewrite: {
                        "^/api": ""
                    }
                }
            }
        }
    }
    // http://114.215.173.225:3000/api/