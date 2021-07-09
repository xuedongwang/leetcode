module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {
    semi: ['warn', 'always']
  },
  globals: {
    test: 'readonly',
    expect: 'readonly'
  }
}
