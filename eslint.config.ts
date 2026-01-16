export { defineConfig } from '@jimmy.codes/eslint-config'

import type { Linter } from 'eslint'

import vitest from '@vitest/eslint-plugin'

export const baseConfig: Linter.Config = {
  name: 'baseConfig',
  files: ['**/*.ts', '**/*.tsx'],
  plugins: {
    vitest,
  },
  rules: {
    'default-case': 'off',
    'unicorn/consistent-function-scoping': 'off',
    'unicorn/prefer-top-level-await': 'off',
    '@eslint-community/eslint-comments/disable-enable-pair': [
      'error',
      { allowWholeFile: true },
    ],
    '@eslint-community/eslint-comments/require-description': 'off',
    '@next/next/no-html-link-for-pages': 'off',
    '@stylistic/padding-line-between-statements': ['off'],
    '@typescript-eslint/no-dynamic-delete': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    '@typescript-eslint/only-throw-error': [
      'error',
      {
        allow: ['ZerospinError'],
      },
    ],
    '@typescript-eslint/require-await': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'jest/require-hook': 'off',
    'jsdoc/check-tag-names': 'off',
    'no-magic-numbers': 'off',
    'no-param-reassign': 'off',
    'no-prototype-builtins': 'off',
    'perfectionist/sort-interfaces': [
      'error',
      {
        groups: ['required-property', 'optional-property'],
      },
    ],
    'perfectionist/sort-object-types': [
      'error',
      { groups: ['required-property', 'optional-property'] },
    ],
    'react-compiler/react-compiler': 'off',
    'testing-library/await-async-queries': 'off',
    'unicorn/prefer-event-target': 'off',
    'unicorn/throw-new-error': 'off',
    'vitest/expect-expect': 'off',
    'vitest/no-standalone-expect': [
      'error',
      {
        additionalTestBlockFunctions: ['it.effect', 'it.effect.only'],
      },
    ],
    'vitest/require-hook': 'off',
  },
}
