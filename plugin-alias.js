const moduleAlias = require('module-alias');
const packagejson = require('./package.json');

const prefix = 'eslint-plugin-';
const plugins = Object.keys(packagejson.dependencies)
    .filter(dependency => dependency.startsWith(prefix));

console.info('Plugins resolution patches:');
for (const plugin of plugins) {
    console.info(' -', plugin, '--', require.resolve(plugin));
    moduleAlias.addAlias(
        plugin,
        require.resolve(plugin),
    );
}
console.info('');

module.exports = plugins.map(plugin => plugin.slice(prefix.length));
