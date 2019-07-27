/**
 * @description returns the settings of the mongoDb connection in loopback
 * @param {object} dataSource The connector instance of loopback datasource
 * @returns {Object} returns object with the status of the mongodb database
 */
const getDatabaseStatusWithLoopbackConnector = (dataSource) => {
    const connector = dataSource.connector;
    const settings = connector.settings;
    const databaseConnected = connector.dataSource.connected;
    const databaseConnecting = connector.dataSource.connecting;
    const databaseInitialized = connector.dataSource.initialized;
    return {
        settings,
        databaseConnected,
        databaseConnecting,
        databaseInitialized
    }
}

module.exports = {
    getDatabaseStatusWithLoopbackConnector,
}