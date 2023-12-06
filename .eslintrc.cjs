/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    // https://github.com/vuejs/eslint-config-airbnb
    '@vue/eslint-config-airbnb-with-typescript',
  ],
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
      ],
      extends: [
        'plugin:cypress/recommended',
      ],
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    // always put parentheses around parameters in arrows functions (confusing otherwise)
    'arrow-parens': ['error', 'always'],
    // allow console logging
    'no-console': 'off',
    // allow debugger but rise a warning
    'no-debugger': 'warn',
    // deactivate this rule for array as it's confusing
    'prefer-destructuring': ['error', { object: true, array: false }],
    // based on @vue/airbnb vue/max-len rule but tolerate eslint-disable-next-line comments
    // 'vue/max-len': customMaxLen,
    'padding-line-between-statements': [
      'error',
      // require blank lines before all return statements (newline-before-return)
      { blankLine: 'always', prev: '*', next: 'return' },
      // require blank lines after every sequence of variable declarations (newline-after-var)
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      // require blank lines between clauses in switch statements
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
      // require blank lines after all directive prologues (lines-around-directive)
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
    ],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
        groups: [
          ['builtin', 'external'],
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
  },
};
