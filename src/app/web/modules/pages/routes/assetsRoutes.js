'use strict';

const Path = require('path');

module.exports = [
    {
        method: 'GET',
        path: '/assets/{param*}',
        handler: {
            directory: {
                path: Path.join(__dirname, '../../public'),
                redirectToSlash: true,
                index: true
            }
        }
    }
];
