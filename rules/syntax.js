module.exports = {
    'no-restricted-syntax': [
        'error',
        {
            // if (useful === 'test', true)
            selector: 'SequenceExpression',
            message: 'Found multiple expressions where only one is expected',
        },
        {
            selector: 'WithStatement',
            message: 'with (me) { dontMess(); }',
        },
        {
            // !varaiable
            selector: 'UnaryExpression[operator="!"]',
            message: 'Unexpected Negating Unary Expression',
        },

        {
            selector: [
                // test || false, false || test
                'LogicalExpression[operator="||"] > [type=/Literal$/]',
                // true && test, test && true
                'LogicalExpression[operator="&&"] > [type=/Literal$/]',
            ].join(', '),
            message: 'Unexpected Literal in LogicalExpression',
        },

        {
            selector: [
                // const b = a ? 'hello' : 'there';, if (a) return 'hello';
                '[test.type="Identifier"] > Identifier.test',
                // if ((a = false) === false) return 'nope';
                'LogicalExpression[right.type="Identifier"] > Identifier.right',
                // if (true !== (a = false)) return 'nope';
                'LogicalExpression[left.type="Identifier"] > Identifier.left',
            ].join(', '),
            message: 'Unexpected Identifier as Conditional',
        },

        {
            selector: [
                // if (a = false) return 'nope';
                '[test.type="AssignmentExpression"] > AssignmentExpression.test',
                // if ((a = false) === false) return 'nope';
                'BinaryExpression[right.type="AssignmentExpression"] > AssignmentExpression.right',
                // if (true !== (a = false)) return 'nope';
                'BinaryExpression[left.type="AssignmentExpression"] > AssignmentExpression.left',
                // if ((a = false) === false) return 'nope';
                'LogicalExpression[right.type="AssignmentExpression"] > AssignmentExpression.right',
                // if (true !== (a = false)) return 'nope';
                'LogicalExpression[left.type="AssignmentExpression"] > AssignmentExpression.left',
            ].join(', '),
            message: 'Unexpected AssignmentExpression in Conditional',
        },
    ],
};
