const webpack = require("webpack");
const path = require("path");
const debug = process.env.NODE_ENV !== "production";
module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "phone",
    runtimeCompiler: true, // 运行时版本是否需要编译
    productionSourceMap: false, // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
    css: {
        // 将组件内部的css提取到一个单独的css文件（只用在生产环境）
        // 也可以是传递给 extract-text-webpack-plugin 的选项对象
        extract: true, // 允许生成 CSS source maps?
        sourceMap: false,
        loaderOptions: {},
        modules: false
    },
    parallel: require("os").cpus().length > 1, // PWA 插件相关配置// 构建时开启多进程处理babel编译 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    devServer: {
        open: process.platform === "darwin",
        disableHostCheck: false,
        host: "0.0.0.0",
        // host: "localhost",
        port: 8084,
        https: false,
        hotOnly: false, // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#configuring-proxy
        proxy: null, // string | Object
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