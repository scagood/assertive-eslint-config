module.exports = {
    'global-require': 'error',
    'no-new-require': 'error',
    'no-mixed-requires': 'error',

    'callback-return': 'error',
    'no-else-return': 'error',
    'handle-callback-err': 'error',

    radix: 'error',

    'no-buffer-constructor': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-new-func': 'error',
    'no-process-env': 'warn',
    'no-process-exit': 'warn',
    'no-proto': 'error',
    'no-script-url': 'error',
    'no-sync': 'error',
    'no-use-extend-native/no-use-extend-native': 'error',
    'no-void': 'error',

    'no-caller': 'error',
    'no-empty-function': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-new-wrappers': 'error',
    'no-new': 'error',
    'no-path-concat': 'error',
    'no-undef': 'error',
    'no-use-before-define': 'error',

    'no-constructor-bind/no-constructor-bind': 'error',
    'no-constructor-bind/no-constructor-state': 'error',

    'no-unused-vars': [
        'error', {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            args: 'after-used',
            vars: 'local',
        },
    ],
};
