'use strict';

class ServiceLocator {

    /**
     * @param {Config} nodeConfig
     */
    constructor(nodeConfig) {
        this._nodeConfig = nodeConfig;
    }

    /**
     * @returns {Logger}
     */
    getLogger() {
        if (!this._logger) {
            const LoggerFactory = require('hapiest-logger/lib/loggerFactory');
            this._logger = LoggerFactory.createLoggerFromNodeConfig(this._nodeConfig);
        }
        return this._logger;
    }

    /**
     * @returns {MysqlService}
     */
    getMysqlService() {
        if (!this._mysqlService) {
            const MysqlServiceFactory = require('hapiest-mysql/lib/mysqlServiceFactory');
            this._mysqlService = MysqlServiceFactory.createFromNodeConfig(this._nodeConfig, this.getLogger());
        }
        return this._mysqlService;
    }

}

module.exports = ServiceLocator;