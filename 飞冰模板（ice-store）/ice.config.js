
const { resolve } = require('path')

let arr = ['config', 'login']
let entry = {}
arr.forEach((item,index) => {
    let moduleName = item[0].toUpperCase() + item.slice(1)
    if(index == 0){
        item = 'index'
    }
    entry[item] = `src/projects/${moduleName}/index.js`
})

module.exports = {
    entry,
    outputDir: 'dist',
    publicPath: './',
    alias: {
        '@': resolve(__dirname, 'src')
    },
    hash: true,
    plugins: [
        ['ice-plugin-fusion']
    ],
}