'use strict';

const BinSetupHelper = require('../binSetupHelper');
BinSetupHelper.setupUncaughtExceptionHandlers();

const NodeConfig = require('config');

const cluster = require('cluster');
const os = require('os');

const Promise = require('bluebird');

const serviceLocatorFactory = require('../../app/services/serviceLocatorFactory').getServiceLocatorSingleton(NodeConfig);
const logger = serviceLocatorFactory.getLogger();
const CustomServerFactory = require('../../app/web/server/serverFactory');

const NUM_CPUS = os.cpus().length;

if (cluster.isMaster) {

    logger.info(`Cluster master is running. Forking workers.`, {pid: process.pid, cpus: NUM_CPUS});

    // Fork workers.
    for (let i = 0; i < NUM_CPUS; i++) {
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        logger.error(`Cluster worker died.`, {code, signal, pid: worker.process.pid});
    });

} else {

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

}