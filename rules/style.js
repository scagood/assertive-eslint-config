const layout = require('./style-layout.js');
const characters = require('./style-characters.js');

module.exports = {
    'linebreak-style': 'off',
    'no-trailing-spaces': 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'no-extra-bind': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'error',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-useless-return': 'error',
    'prefer-promise-reject-errors': 'error',
    'require-await': 'off',
    'no-undefined': 'error',

    'func-name-matching': ['error', 'never'],
    'func-style': [
        'error',
        'declaration',
        {allowArrowFunctions: true},
    ],
    'consistent-this': ['error', 'that'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'lines-between-class-members': [
        'error',
        'always',
        {exceptAfterSingleLine: true},
    ],
    'max-depth': ['error', 4],
    'max-len': [
        'error',
        {
            code: 90,
            comments: 130,
            ignoreUrls: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
        },
    ],
    complexity: ['error', 15],
    'max-lines': [
        'warn',
        {
            max: 180,
            skipBlankLines: true,
            skipComments: true,
        },
    ],
    'max-lines-per-function': [
        'error',
        {
            max: 60,
            skipBlankLines: true,
            skipComments: true,
        },
    ],
    'max-nested-callbacks': ['error', 3],
    'max-params': ['error', 4],
    'max-statements-per-line': 'error',
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-lonely-if': 'error',
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-unneeded-ternary': 'error',

    'one-var': [
        'error',
        {
            var: 'always',
            let: 'never',
            const: 'never',
        },
    ],
    'operator-assignment': ['error', 'always'],

    yoda: 'error',
    'custom-rules/no-unary-not': 'error',

    'prefer-object-spread': 'error',
    ...layout,
    ...characters,
};
