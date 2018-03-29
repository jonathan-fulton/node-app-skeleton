'use strict';

const expect = require('chai').expect;
const EventEmitter = require('events');
const NodeConfig = require('config-uncached');

const ServerFactory = require('../../../../../app/web/server/serverFactory');

describe('ServerFactory', function() {
    describe('createServerFromNodeConfig', function() {

        it('should work', function() {

            const nodeConfig = NodeConfig(true);

            return ServerFactory.createServerFromNodeConfig(nodeConfig)
                .then(server => {
                    expect(server).to.be.an.instanceOf(EventEmitter);
                    expect(server).to.have.property('connections');
                    expect(server.connections.length).to.equal(1);
                    expect(server).to.have.property('info');
                    expect(server.info.port).to.equal(9000);
                    expect(server.info.protocol).to.equal('http');

                    const host = nodeConfig.get('server.host');

                    expect(server.info.uri).to.equal(`http://${host}:9000`);
                })

        });

    });
});
