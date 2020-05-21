module.exports = {
    curly: 'error',
    'brace-style': 'error',
    'block-spacing': 'error',
    'no-trailing-spaces': 'error',

    indent: [
        'error',
        4,
    ],
    'eol-last': ['error', 'always'],
    'dot-location': ['error', 'property'],

    'array-bracket-newline': [
        'error',
        {
            multiline: true,
            minItems: 4,
        },
    ],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],

    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [
        'error',
        {before: false, after: true},
    ],
    'comma-style': ['error', 'last'],

    'func-call-spacing': ['error', 'never'],
    'function-paren-newline': ['error', 'consistent'],

    // https://eslint.org/docs/rules/object-curly-newline
    'object-curly-newline': [
        'error',
        {multiline: true},
    ],
    'object-curly-spacing': ['error', 'never'],

    'key-spacing': [
        'error',
        {
            beforeColon: false,
            afterColon: true,
        },
    ],
    'keyword-spacing': [
        'error',
        {
            before: true,
            after: true,
        },
    ],
    'no-whitespace-before-property': 'error',
    'computed-property-spacing': ['error', 'never'],
    'one-var-declaration-per-line': ['error', 'initializations'],

    'operator-linebreak': [
        'error',
        'after',
        {
            overrides: {
                '?': 'before',
                ':': 'before',
            },
        },
    ],
    'no-multiple-empty-lines': [
        'error', {
            max: 1,
            maxBOF: 1,
            maxEOF: 1,
        },
    ],
    'padded-blocks': ['error', 'never'],
    'semi-spacing': 'error',

    'space-before-blocks': 'error',
    'space-before-function-paren': [
        'error',
        {
            anonymous: 'always',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    'space-in-parens': ['error', 'never'],
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always', {markers: ['?']}],
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
};
