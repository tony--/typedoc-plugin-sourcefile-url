var plugin = require('./SourcefileUrlMapPlugin');

module.exports = function(PluginHost) {
    var app = PluginHost.owner;

    app.options.addDeclaration({name: 'sourcefile-url-map'});
    app.options.addDeclaration({name: 'sourcefile-url-prefix'});

    app.converter.addComponent('sourcefile-url-map', plugin.SourcefileUrlMapPlugin);
};