module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        // '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
      // 不检查分号
      "no-extra-semi": [0],
      // 缩进2或4个空格
      "indent": "off",
      // function的参数前加空格
      "space-before-function-paren": [0]
    }
}