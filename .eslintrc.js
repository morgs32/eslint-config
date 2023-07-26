// @ts-check
/** @type {import('@typescript-eslint/experimental-utils').TSESLint.Linter.Config} */
module.exports = {
  extends: [
    'react-app',
    'react-app/jest'
  ],
  settings: {
    react: {
      'version': 'detect',
    },
  },
  ignorePatterns: [
    '**/lib', 
    '**/dist', 
    '**/*.d.ts',
    'public/*'
  ],
  plugins: [
    'unused-imports',
  ],
  rules: {
    'spaced-comment': ['error', 'always', { 'markers': ['/'] }],
    'indent': 'off',
    'unused-imports/no-unused-imports': 'error',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    '@typescript-eslint/indent': ['error', 2],
    'react/jsx-indent': ['error', 2],
    'space-infix-ops': ['error'],
    'react-hooks/rules-of-hooks': 0, // Checks rules of Hooks
    quotes: ['error', 'single'],
    'space-before-blocks': 'error',
    'no-loop-func': 0,
    'keyword-spacing': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ObjectPattern: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ImportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
          consistent: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
}
