module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  parser: 'vue-eslint-parser',
  plugins: ['@typescript-eslint'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
  },
  extends: [
  ],
  rules: {
    'no-console':
      process.env.NODE_ENV === 'production' || !!process.env.LINT
        ? ['error', { allow: ['error', 'warn', 'info'] }]
        : 'off',
    'no-debugger': 'error',
    'max-lines': 'off',
    'max-depth': ['error', 5],
    'max-len': ['error', 200, 2, { ignoreComments: true }],
    'no-plusplus': 'off',
    'no-bitwise': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'prefer-destructuring': 'off',
    'prefer-template': 'off',
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'no-param-reassign': ['error', { props: false }],
    'import/prefer-default-export': 'on',
    'no-else-return': 'on',
    '@typescript-eslint/no-empty-function': 'on',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'after-used' }],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'operator-linebreak': 'off',
    // to do, 暂时禁止，之后再做
    'max-classes-per-file': 'off',
    'global-require': 'off',
    'import/no-cycle': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-use-before-define': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'no-return-assign': 'off',
    'object-curly-newline': 'off',
    'no-shadow': 'off', // 以ts为准，即下一行
    '@typescript-eslint/no-shadow': ['error'],
    'no-unused-vars': 'off', // 以ts为准
    'no-undef': 'off', // 以ts为准。参考PR：https://github.com/typescript-eslint/typescript-eslint/issues/2528
  },
  overrides: [
  ],
  settings: {
  },
};
