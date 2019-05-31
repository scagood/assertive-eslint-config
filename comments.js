module.exports = {
    'capitalized-comments': ['off'],

    'eslint-comments/disable-enable-pair': [
        'error',
        {allowWholeFile: true},
    ],
    'eslint-comments/no-aggregating-enable': 'error',
    'eslint-comments/no-duplicate-disable': 'error',
    'eslint-comments/no-unlimited-disable': 'warn',
    'eslint-comments/no-unused-disable': 'error',
    'eslint-comments/no-unused-enable': 'error',

    'line-comment-position': [
        'error',
        {position: 'above'},
    ],
    'multiline-comment-style': ['error', 'starred-block'],

    'no-inline-comments': 'error',
    'no-warning-comments': [
        'warn',
        {
            location: 'anywhere',
            terms: ['todo', 'fixme'],
        },
    ],
};
