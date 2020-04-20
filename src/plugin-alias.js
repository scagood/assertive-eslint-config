const moduleAlias = require('module-alias');
const packagejson = require('../package.json');

const prefix = 'eslint-plugin-';
const plugins = Object.keys(packagejson.dependencies)
    .filter(dependency => dependency.startsWith(prefix));

for (const plugin of plugins) {
    moduleAlias.addAlias(
        plugin,
        require.resolve(plugin),
    );
}

module.exports = plugins.map(plugin => plugin.slice(prefix.length));
