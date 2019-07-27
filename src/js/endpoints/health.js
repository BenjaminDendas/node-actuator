const https = require('http');

const healthStatus = () => {
    return "health"
}

const isServerOnline = async (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, () => {
            // If you get here, you have a response.
            return resolve(true);
        }).on('error', (e) => {
            // Here, an error occurred.  Check `e` for the error.
            return resolve(false);
        });
    })
}

module.exports = {
    healthStatus,
    isServerOnline
}