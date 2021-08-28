module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    indent: ['error', 2],
    'prefer-promise-reject-errors': 0,
    'max-len': [2, { code: 80 }],
    'one-var': 0,
    'react/jsx-filename-extension': 0,
    'one-var-declaration-per-line': 0,
    'no-unused-expressions': 0,
    'no-lonely-if': 0,
    'new-cap': 0,
    'no-undef': 2,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'comma-dangle': 0,
    'react/button-has-type': 0,
    'react/prop-types': 0,
    'no-alert': 0,
    curly: ['error', 'multi-line'],
    'no-return-assign': 0,
    'class-methods-use-this': ['error', { exceptMethods: ['render'] }],
    'react/self-closing-comp': ['error', {
      component: false,
      html: false,
    }],
    'max-nested-callbacks': [2, 10],
    'import/no-unresolved': [2, { commonjs: true }],
    'valid-jsdoc': ['error', {
      requireReturn: true,
      requireReturnType: true,
      requireParamDescription: false,
      requireReturnDescription: true,
    }],
    'require-jsdoc': ['error', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
      },
    }],
  },
};
