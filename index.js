
const databaseEndpoint = require('./src/js/endpoints/database');
const envEndpoint = require('./src/js/endpoints/env');
const infoEndpoint = require('./src/js/endpoints/info');
const metricsEndpoint = require('./src/js/endpoints/metrics'); 
const urlEndpoint = require('./src/js/endpoints/url'); 
const gitEndpoint = require('./src/js/endpoints/git'); 
const sftpEndpoint = require('./src/js/endpoints/sftp'); 

module.exports = {
    databaseEndpoint,
    envEndpoint,
    infoEndpoint,
    metricsEndpoint,
    urlEndpoint,
    gitEndpoint,
    sftpEndpoint
}