'use strict';

const NodeConfig = require('config');
const expect = require('chai').expect;

const ServiceLocator = require('../../../../app/services/serviceLocatorFactory').getServiceLocatorSingleton();

describe('ServiceLocator', function() {
    describe('getLogger', function() {

        it('Should return a logger', function() {
            const logger = ServiceLocator.getLogger();

            expect(logger).to.be.an('object');
            expect(logger.debug).to.be.a('function');
            expect(logger.info).to.be.a('function');
            expect(logger.notice).to.be.a('function');
            expect(logger.warning).to.be.a('function');
            expect(logger.error).to.be.a('function');
        });

    });
});