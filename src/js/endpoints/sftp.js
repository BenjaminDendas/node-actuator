const sftpClient = require('ssh2-sftp-client');

const isSftpServerOnline = async (host, port, username, password) => {
    const sftp = new sftpClient();
    await sftp.connect({
        host,
        port,
        username,
        password
    }).then(() => {
        return true;
    }).catch((err) => {
        return false;
    });
}

module.exports = {
    isSftpServerOnline
}