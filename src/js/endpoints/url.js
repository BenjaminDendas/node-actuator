const http = require('http');

/**
 * @description checks if the service is accessible by the system
 * @param {string} url The url of the service that we try to access.
 * @returns {Promise} returns a promise that returns a boolean upon resolving stating if the service is online or not.
 */
const isServerOnline = async (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, () => {
            return resolve({
                status: {
                    online: true
                }
            });
        }).on('error', (e) => {
            return resolve({
                status: {
                    online: false
                }
            });
        });
    })
}

module.exports = {
    isServerOnline
}