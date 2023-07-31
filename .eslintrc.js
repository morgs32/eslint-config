// @ts-check
module.exports = {
  extends: [
    "next/core-web-vitals"
  ],
  ignorePatterns: [
    "**/lib", 
    "**/dist", 
  ],
  plugins: [
    "unused-imports",
    "react"
  ],
  rules: {
    "spaced-comment": ["error", "always", { "markers": ["/"] }],
    "unused-imports/no-unused-imports": "error",
    "comma-spacing": ["error", { "before": false, "after": true }],
    "react/jsx-indent": ["error", 2],
    "space-infix-ops": ["error"],
    "react-hooks/rules-of-hooks": 0, // Checks rules of Hooks
    quotes: ["error", "double"],
    "space-before-blocks": "error",
    "keyword-spacing": "error",
    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": [
      "error",
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
    "react/jsx-indent-props": [2, 2],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    
    // https://github.com/facebook/create-react-app/blob/main/packages/eslint-config-react-app/index.js
    "array-callback-return": "warn",
    "default-case": ["warn", { commentPattern: "^no default$" }],
    "dot-location": ["warn", "property"],
    eqeqeq: ["warn", "smart"],
    "new-parens": "warn",
    "no-array-constructor": "warn",
    "no-caller": "warn",
    "no-cond-assign": ["warn", "except-parens"],
    "no-const-assign": "warn",
    "no-control-regex": "warn",
    "no-delete-var": "warn",
    "no-dupe-args": "warn",
    "no-dupe-class-members": "warn",
    "no-dupe-keys": "warn",
    "no-duplicate-case": "warn",
    "no-empty-character-class": "warn",
    "no-empty-pattern": "warn",
    "no-eval": "warn",
    "no-ex-assign": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-extra-label": "warn",
    "no-fallthrough": "warn",
    "no-func-assign": "warn",
    "no-implied-eval": "warn",
    "no-invalid-regexp": "warn",
    "no-iterator": "warn",
    "no-label-var": "warn",
    "no-labels": ["warn", { allowLoop: true, allowSwitch: false }],
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-mixed-operators": [
      "warn",
      {
        groups: [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"],
        ],
        allowSamePrecedence: false,
      },
    ],
    "no-multi-str": "warn",
    "no-global-assign": "warn",
    "no-unsafe-negation": "warn",
    "no-new-func": "warn",
    "no-new-object": "warn",
    "no-new-symbol": "warn",
    "no-new-wrappers": "warn",
    "no-obj-calls": "warn",
    "no-octal": "warn",
    "no-octal-escape": "warn",
    "no-redeclare": "warn",
    "no-regex-spaces": "warn",
    "no-restricted-syntax": ["warn", "WithStatement"],
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-shadow-restricted-names": "warn",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-this-before-super": "warn",
    "no-throw-literal": "warn",
    "no-undef": "error",
    "no-unreachable": "warn",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true,
        allowTernary: true,
        allowTaggedTemplates: true,
      },
    ],
    "no-unused-labels": "warn",
    "no-unused-vars": [
      "warn",
      {
        args: "none",
        ignoreRestSiblings: true,
      },
    ],
    "no-use-before-define": [
      "warn",
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    "no-useless-computed-key": "warn",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": [
      "warn",
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    "no-with": "warn",
    "no-whitespace-before-property": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "require-yield": "warn",
    "rest-spread-spacing": ["warn", "never"],
    
    "react/jsx-no-comment-textnodes": "warn",
    "react/jsx-no-duplicate-props": "warn",
    "react/jsx-no-target-blank": "warn",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": [
      "warn",
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    "react/no-danger-with-children": "warn",
    // Disabled because of undesirable warnings
    // See https://github.com/facebook/create-react-app/issues/5204 for
    // blockers until its re-enabled
    // 'react/no-deprecated': 'warn',
    "react/no-direct-mutation-state": "warn",
    "react/no-is-mounted": "warn",
    "react/no-typos": "error",
    "react/require-render-return": "error",
    "react/style-prop-object": "warn"

  },
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        "import/no-anonymous-default-export": "off",
      },
    },
  ],
}
