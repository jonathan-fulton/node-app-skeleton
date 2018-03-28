'use strict';

const config = require('config');

const appName = config.get('logger.newRelic.appName');
const key = config.get('logger.newRelic.licenseKey');
const level = config.get('logger.newRelic.level');

/**
 * New Relic agent configuration.
 *
 * https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/nodejs-agent-configuration
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
    app_name: [appName],
    license_key: key,
    logging: {
      level: level
    },

    // Note, this could log sensitive info like passwords to NR - make sure to explicitly exclude those fields in
    capture_params: true,
    ignored_params: '',

    error_collector: {
        ignore_status_codes: [404, 403]
    },

    browser_monitoring: {
      enable: false
    },

    transaction_tracer: {
        // Note, this can expose sensitive info - change to obfuscated for additional security (though more difficulty debugging)
        record_sql: 'raw'
    },

    slow_sql: {
      enabled: true
    },

    feature_flag: {
        promise_segments: true,
        await_support: true
    }

};
