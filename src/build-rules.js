function findDuplicates(array) {
    const object = {};
    const result = [];

    array.forEach(item => {
        if (!object[item]) {
            object[item] = 0;
        }
        object[item] += 1;
    });

    for (const property in object) {
        if (object[property] > 1) {
            result.push(property);
        }
    }

    return result;
}

function checkForDuplicates(rulesets) {
    const rules = [];

    for (const ruleset of rulesets) {
        rules.push(...Object.keys(ruleset));
    }

    const duplicates = findDuplicates(rules);
    if (duplicates.length > 0) {
        console.warn('Duplicates found:', duplicates);
    }
}

function buildRules(...rulesets) {
    checkForDuplicates(rulesets);
    const output = {};

    for (const ruleset of rulesets) {
        Object.assign(output, ruleset);
    }

    return output;
}

module.exports = {buildRules, checkForDuplicates};
