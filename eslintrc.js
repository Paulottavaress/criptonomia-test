module.exports = {
  root: true,

  env: {
    jest: true,
    browser: true,
    es6: true,
    node: true,
  },

  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    'prettier/vue',
    'plugin:prettier/recommended',
  ],

  plugins: ['prettier'],

  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'vue/attribute-hyphenation': 'off',
    curly: 'off',
    'no-shadow': 'off',
    'no-useless-escape': 'off',
    'no-prototype-builtins': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'no-unused-vars': ['error', { args: 'none', ignoreRestSiblings: true }],
    'no-empty': ['error', { allowEmptyCatch: true }],
  },

  parserOptions: {
    parser: 'babel-eslint',
  },
};
