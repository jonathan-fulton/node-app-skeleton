'use strict';

// Configuration file for db-migrate
// We're using a javascript file instead of JSON so we can leverage the node config module so we don't have config in multiple locations
const binSetupHelper = require('../bin/binSetupHelper');
binSetupHelper.setupNodeConfig();

const NodeConfig = require('config');

const dbMigrateConfig = {
    dev: {
        driver: 'mysql',
        host: NodeConfig.get('database.write.host'),
        database: 'mysql', // should be present - requires a database to connect
        user: 'root',
        password: 'password',
        multipleStatements: true
    }
};

module.exports = dbMigrateConfig;