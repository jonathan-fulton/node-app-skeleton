'use strict';

const NodeConfig = require('config');
const expect = require('chai').expect;

const ServerFactory = require('../../../../../../app/web/server/serverFactory');

describe('HomepageRoutes', function() {
    let server = null;
    before(function() {
        const serverSetup = ServerFactory.createServerFromNodeConfig(NodeConfig).then(localServer => server = localServer);
        return serverSetup;
    });

    describe('GET /', function() {
        it('Should return 200', function(done) {
            server.inject({method: 'GET', url: `/`}, (res) => {
                Promise.resolve()
                .then(() => {
                    expect(res).to.be.an('object');
                    expect(res.statusCode).to.equal(200);
                })
                .then(() => done())
                .catch(err => done(err));
            });
        });
    });

});