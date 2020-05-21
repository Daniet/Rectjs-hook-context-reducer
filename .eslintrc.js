module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "react-app"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "react/jsx-curly-brace-presence": "off",
    "react/jsx-wrap-multilines": "off",
    "react/jsx-max-props-per-line": "off",
    "react/jsx-first-prop-new-line": "off",
    "react/jsx-closing-tag-location": "off",
    "react/prop-types": "off",
    "react/no-array-index-key": "off",
    "comma-dangle": "off",
    "semi": "off",
    "no-duplicate-imports": "error",
    "no-multi-str": "error",
    "no-extra-bind": "error",
    "no-param-reassign": "error",
    "no-useless-concat": "error",
    "func-style": [
      "error",
      "declaration",
      {
        "allowArrowFunctions": true
      }
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1
      }
    ],
    "max-classes-per-file": [
      "error",
      1
    ],
    "max-lines-per-function": [
      "error",
      45
    ]
  },
};
