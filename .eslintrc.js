module.exports = {
  root: true,
  env: {
    jest: true,
    node: true,
  },
  'extends': [
    "@avalanche/eslint-config",
    "plugin:vue/recommended",
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
