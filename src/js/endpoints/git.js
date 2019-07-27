const readline = require('readline');
const fs = require('fs');

const getLocalGitStatusForBranch = (localFolderPath, branchname) => {
    return readGitInfo(localFolderPath, branchname);
}


const readGitInfo = async (filePath, branchname) => {
    let content;

    return new Promise((resolve, reject) => {
        fs.readFile(filePath + branchname, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            let splittedData = data.split('\n');
            content = splittedData.slice(0, splittedData.length - 1)
            return resolve(parseGitInfo(content));
        });
    });


}

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