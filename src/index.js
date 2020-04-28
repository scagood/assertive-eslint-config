const plugins = require('./plugin-alias.js');
const {buildRules} = require('./build-rules.js');

const comments = require('../rules/comments');
const es6 = require('../rules/es6');
const imports = require('../rules/import');
const jest = require('../rules/jest');
const node = require('../rules/node');
const promise = require('../rules/promise');
const smells = require('../rules/smells');
const stylistic = require('../rules/style');
const unicorn = require('../rules/unicorn');

module.exports = {
    env: {
        node: true,
        es6: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    extends: [
        'plugin:array-func/recommended',
        'plugin:switch-case/recommended',
        'plugin:unicorn/recommended',
    ],
    plugins: plugins,
    rules: buildRules(
        comments,
        es6,
        imports,
        jest,
        node,
        promise,
        smells,
        stylistic,
        unicorn,
    ),
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
                'import/no-webpack-loader-syntax': 'off',
            },
        },
    ],
    settings: {'import/core-modules': ['electron', 'atom']},
};
