const meta = {
    type: 'suggestion',

    docs: {
        description: 'disallow not unary expression',
        category: 'Stylistic Issues',
        recommended: true,
        url: 'https://github.com/scagood/assertive-eslint-config/blob/master/docs/no-unary-not.md',
    },

    schema: [],

    messages: {unexpectedNegated: 'Unexpected unary not'},
};

function create(context) {
    return {
        UnaryExpression(node) {
            if (
                node.type === 'UnaryExpression' &&
                node.operator === '!'
            ) {
                context.report({
                    node: node,
                    messageId: 'unexpectedNegated',
                });
            }
        },
    };
}

module.exports = {
    meta,
    create,
};
