'use strict';

const BinSetupHelper = require('../binSetupHelper');
BinSetupHelper.setupUncaughtExceptionHandlers();

const NodeConfig = require('config');
const Promise = require('bluebird');

const serviceLocatorFactory = require('../../app/services/serviceLocatorFactory').getServiceLocatorSingleton(NodeConfig);
const logger = serviceLocatorFactory.getLogger();
const CustomServerFactory = require('../../app/web/server/serverFactory');

logger.info('Attempting to create web server', {env: process.env});

CustomServerFactory.createServerFromNodeConfig(NodeConfig)
    .then(server => {
        logger.info('Server created successfully');

        server.start((err) => {
            if (err) {
                logger.error('Server failed to start', err);
            }
        });
    })
    .catch(err => {
        logger.error('Failed creating server', err);
    });