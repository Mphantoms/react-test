module.exports = {
    transformIgnorePatterns :["<rootDir>/bower_components/", "<rootDir>/node_modules/"],
    transform: {
        // 将.js后缀的文件使用babel-jest处理
        "^.+\\.js$": "babel-jest",
    },
}
