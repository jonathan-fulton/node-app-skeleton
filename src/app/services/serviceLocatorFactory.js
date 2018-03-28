'use strict';

const NodeConfig = require('config');
const ServiceLocator = require('./serviceLocator');

let serviceLocator = null;

const ServiceLocatorFactory = {

    /**
     * @param {Config} [nodeConfig]
     * @returns {ServiceLocator}
     */
    getServiceLocatorSingleton: (nodeConfig) => {
        if (!serviceLocator) {
            if (!nodeConfig) {
                nodeConfig = NodeConfig;
            }
            serviceLocator = new ServiceLocator(nodeConfig);
        }
        return serviceLocator;
    }

};

module.exports = ServiceLocatorFactory;
