'use strict';

module.exports = [
    {
        method: 'GET',
        path: '/',
        handler: function (request, reply) {
            reply.view('pages/views/homepage', {});
        }
    }
];
