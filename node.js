module.exports = {
    'node/file-extension-in-import': [
        'error',
        'always',
        {'.js': 'never'},
    ],
    'node/no-deprecated-api': 'error',
    'node/no-missing-import': 'error',
    'node/no-missing-require': 'error',
    'node/no-unpublished-bin': 'error',
    'node/prefer-global/buffer': ['error', 'always'],
    'node/prefer-global/console': ['error', 'always'],
    'node/prefer-global/process': ['error', 'always'],
    'node/prefer-promises/dns': 'warn',
    'node/prefer-promises/fs': 'warn',
    'node/process-exit-as-throw': 'error',
};
