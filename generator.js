module.exports = (api, options, rootOptions) => {
    console.log(api.rootOptions)
    api.extendPackage({
        scripts: {
            "test": 'vue-cli-service test'
        },
        dependencies: {
            "axios": "^0.18.0",
            "truck-lib": "^3.2.39",
        }
    })

    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render('./template')
}
