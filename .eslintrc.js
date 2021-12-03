module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    'standard',
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module'
  }
}
