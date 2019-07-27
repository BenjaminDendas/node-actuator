
const databaseEndpoint = require('./src/js/endpoints/database');
const envEndpoint = require('./src/js/endpoints/env');
const infoEndpoint = require('./src/js/endpoints/info');
const metricsEndpoint = require('./src/js/endpoints/metrics'); 
const healthEndpoint = require('./src/js/endpoints/health'); 
const gitEndpoint = require('./src/js/endpoints/git'); 

module.exports = {
    databaseEndpoint,
    envEndpoint,
    infoEndpoint,
    metricsEndpoint,
    healthEndpoint,
    gitEndpoint
}