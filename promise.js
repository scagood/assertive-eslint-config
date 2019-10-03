module.exports = {
    'promise/catch-or-return': [
        'error',
        {allowFinally: true},
    ],
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/no-return-wrap': [
        'error',
        {allowReject: true},
    ],
    'promise/param-names': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'promise/valid-params': 'error',
};
