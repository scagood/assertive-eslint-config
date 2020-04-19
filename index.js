const plugins = require('./plugin-alias.js');
const stylistic = require('./style');
const comments = require('./comments');
const imports = require('./import');
const node = require('./node');
const promise = require('./promise');
const jest = require('./jest');
const unicorn = require('./unicorn');
const es6 = require('./es6');

module.exports = {
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: ['plugin:unicorn/recommended'],
    plugins: plugins,
    rules: {
        ...stylistic,
        ...comments,
        ...imports,
        ...node,
        ...promise,
        ...unicorn,
        ...es6,
        ...jest,
        'callback-return': 'error',
        curly: 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'error',
        eqeqeq: 'error',
        'global-require': 'error',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-mixed-requires': 'error',
        'no-new-func': 'error',
        'no-new-require': 'error',
        'no-new': 'error',
        'no-new-wrappers': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'warn',
        'no-process-exit': 'warn',
        'no-proto': 'error',
        'no-script-url': 'error',
        'no-sync': 'error',
        'no-trailing-spaces': 'error',
        'no-use-extend-native/no-use-extend-native': 'error',
        'no-void': 'error',
        'prefer-promise-reject-errors': 'error',
        radix: 'error',

        'no-undef': 'error',
        'no-use-before-define': 'error',
        'no-unused-vars': [
            'error', {
                argsIgnorePattern: '^_',
                varsIgnorePattern: '^_',
                args: 'after-used',
                vars: 'local',
            },
        ],
    },
    overrides: [
        {
            files: [
                '__mocks__/*.js',
                '__mocks__/*/*.js',
            ],
            globals: {jest: true},
        },
        {
            files: [
                '*.test.js',
                '*.spec.js',
            ],
            env: {'jest/globals': true},
            rules: {
                'max-lines': 'off',
                'max-lines-per-function': 'off',
            },
        },
    ],
    settings: {'import/core-modules': ['electron', 'atom']},
};
