const fs = require('fs');

/**
 * @description returns details about the current application
 * @param {string} packagepath The path of the package.json file
 * @returns {Object} details about the application
 */
const info = (packagepath) => {
    let pjson = null;

    if (checkPath(packagepath)) {
        pjson = require(packagepath);
        return {
            name: pjson.name,
            description: pjson.description,
            version: pjson.version,
            repository: pjson.repository,
            license: pjson.license,
            author: pjson.author
        };
    }
    return null;   
}

/**
 * @description returns the author of the current application
 * @param {string} packagepath The path of the package.json file
 * @returns {Object} author of the application
 */
const getApplicationAuthor = (packagepath) => {
    if (checkPath(packagepath)) {
        pjson = require(packagepath);
        return {
            author: pjson.author
        };
    }
    return null;
}

/**
 * @description returns the license used for this application
 * @param {string} packagepath The path of the package.json file
 * @returns {Object} returns the license of the application
 */
const getApplicationLicense = (packagepath) => {
    if (checkPath(packagepath)) {
        pjson = require(packagepath);
        return {
            license: pjson.license,
        };
    }
    return null;
}

/**
 * @description returns the repository where the application's code is hosted
 * @param {string} packagepath The path of the package.json file
 * @returns {Object} object with settings of the repository
 */
const getApplicationRepository = (packagepath) => {
    if (checkPath(packagepath)) {
        pjson = require(packagepath);
        return {
            repository: pjson.repository,
        };
    }
    return null;
}

/**
 * @description returns the version of the current application
 * @param {string} packagepath The path of the package.json file
 * @returns {Object} returns object with the version of the application
 */
const getApplicationVersion = (packagepath) => {
    if (checkPath(packagepath)) {
        pjson = require(packagepath);
        return {
            version: pjson.version,
        };
    }
    return null;
}

/**
 * @description returns description of the application in package.json
 * @param {string} packagepath The path of the package.json file
 * @returns {Object} Description about the application
 */
const getApplicationDescription = (packagepath) => {
    if (checkPath(packagepath)) {
        pjson = require(packagepath);
        return {
            description: pjson.description
        };
    }
    return null;
}

/**
 * @description returns the name of the application in package.json
 * @param {string} packagepath The path of the package.json file
 * @returns {Object} object containing the name of the application
 */
const getApplicationName = (packagepath) => {
    if(checkPath(packagepath)) {
        var pjson = require(packagepath);
        return {
            name: pjson.name
        }
    }
    return null;
}

/**
 * @description true if the supplied path exists on the filesystem, false if the path doesn 't exist on the filesystem
 * @param {string} path The path of the package.json file
 * @returns {boolean} result of fs.exists(path)
 */
const checkPath = (path) => {
    if (fs.exists(path)) {
        return true;
    }
    return false;
}

module.exports = {
    info,
    getApplicationName,
    getApplicationDescription,
    getApplicationVersion,
    getApplicationRepository,
    getApplicationLicense,
    getApplicationAuthor
}