const fs = require('fs');

/**
 * @description returns the last 5 actions on the repository
 * @param {string} localFolderPath The path of the /.git/logs/refs/heads/ folder
 * @param {string} branchname The name of the branch that we will monitor
 * @returns {Array} returns an array with the 5 last local actions on the repository
 */
const getLocalGitStatusForBranch = (localFolderPath, branchname) => {
    return readGitInfo(localFolderPath, branchname);
}

/**
 * @description reads the file
 * @param {string} localFolderPath The path of the /.git/logs/refs/heads/ folder
 * @param {string} branchname The name of the branch that we will monitor
 * @returns {Array} returns an array with the 5 last local actions on the repository
 */
const readGitInfo = async (filePath, branchname) => {
    let content;
    return new Promise((resolve, reject) => {
        fs.readFile(filePath + branchname, 'utf-8', (err, data) => {
            if (err) {
                return reject(null);
            }
            let splittedData = data.split('\n');
            content = splittedData.slice(0, splittedData.length - 1)
            if (content.length <= 5) {
                return resolve(parseGitInfo(content));
            }
            content = content.slice(content.length - 5, content.length);
            return resolve(parseGitInfo(content));
        });
    });
}

/**
 * @description parses the 5 lines of data to a list of objects
 * @param {Array} info The path of the /.git/logs/refs/heads/ folder
 * @returns {object} returns an array with the 5 last local actions on the repository converted to objects
 */
const parseGitInfo = (info) => {
    gitElements = [];
    info.forEach(element => {
        let lineElements = element.split(' ');
        let lastpart = element.split('\t');
        let singleGitElement = {
            id: lineElements[1],
            timestamp: lineElements[5],
            message: lastpart[1]
        }
        gitElements.push(singleGitElement);
    });
    return gitElements;
}

module.exports = {
    getLocalGitStatusForBranch
}