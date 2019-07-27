const configuration = require("../../config.json");

const retrieveEndpoints = () => {
    const endpoints = JSON.parse(configuration);
    return endpoints;
}

module.exports = {
    retrieveEndpoints
}