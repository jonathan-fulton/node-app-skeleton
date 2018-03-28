'use strict';

const Path = require('path');
const HapiestServerFactory = require('hapiest-server');

const beforeRoutingPlugins = []; // Add plugins that need to be registered before routing (e.g., authentication)
const projectRootDir = Path.resolve('./../..');

class ServerFactory {

    /**
     * @param {Config} nodeConfig
     * @returns {Promise.<Hapi.Server>}
     */
    static createServerFromNodeConfig(nodeConfig) {

        return new Promise((resolve, reject) => {
            HapiestServerFactory.createServerFromNodeConfig(nodeConfig, projectRootDir, beforeRoutingPlugins, (err, server) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(server);
                }
            });

        })
        // Register additional plugins
    }

}

module.exports = ServerFactory;