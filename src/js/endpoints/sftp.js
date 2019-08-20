const sftpClient = require('ssh2-sftp-client');

/**
 * @description checks the availability of the sftp server
 * @param {string} host the hostname of the server
 * @param {number} port the port of the server
 * @param {string} username the username of the user connecting
 * @param {string} password the password of the user connecting
 * @returns {boolean} true if there was a connection made, false if the connection is rejected.
 */
const isSftpServerOnline = async (host, port, username, password) => {
    const sftp = new sftpClient();
    return await sftp.connect({
        host,
        port,
        username,
        password
    }).then((res) => {
        res.end();
        return {
                online: true
        };
    }).catch((err) => {
        return {
                online: false
        };
    });
}

module.exports = {
    isSftpServerOnline
}