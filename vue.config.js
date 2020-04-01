const webpack = require("webpack");
const path = require("path");
const debug = process.env.NODE_ENV !== "production";
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "phone",
    runtimeCompiler: true, // 运行时版本是否需要编译
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    devServer: {
        open: process.platform === "darwin",
        disableHostCheck: false,
        host: "0.0.0.0",
        // host: "localhost",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null,
        before: app => {}
    }, // 第三方插件配置
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",

                jQuery: "jquery",
                "windows.jQuery": "jquery"
            })
        ]
    },
    lintOnSave: undefined,

};