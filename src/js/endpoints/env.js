
/**
 * @description returns details about the current environment
 * @returns {Object}
 */
const getEnvironmentDetails = () => {
    return {
        environment: process.env.NODE_ENV,
        memoryUsage: process.memoryUsage(),
        uptime: process.uptime(),
        cwd: process.cwd(),
        pid: process.pid,
        platform: process.platform,
        noderelease: process.release,
        resourceUsage: process.resourceUsage
    }
}
/**
 * @description returns the currect active node environment
 * @returns {Object}
 */
const getActiveEnvironment = () => {
    return process.env.NODE_ENV;
}

/**
 * @description returns the currect memory usage
 * @returns {Object}
 */
const getMemoryUsage = () => {
    return process.memoryUsage();
}

/**
 * @description returns the uptime of the node process
 * @returns {string}
 */
const getUptime = () => {
    return process.uptime()
}

/**
 * @description returns the current working directory
 * @returns {string}
 */
const getCurrentWorkingDirectory = () => {
    return process.cwd();
}

/**
 * @description returns the PID of the process
 * @returns {number}
 */
const getProcessId = () => {
    return process.pid;
}

/**
 * @description returns the OS where the node process is running on
 * @returns {string}
 */
const getPlatform = () => {
    return process.platform;
}

/**
 * @description returns the currect node version
 * @returns {Object}
 */
const getNodeVersion = () => {
    return process.release;
}

/**
 * @description returns the resourceUsage of the node process
 * @returns {Object}
 */
const getResourceUsage = () => {
    return process.resourceUsage;
}


module.exports = {
    getEnvironmentDetails,
    getActiveEnvironment,
    getMemoryUsage,
    getUptime,
    getCurrentWorkingDirectory,
    getProcessId,
    getPlatform,
    getNodeVersion,
    getResourceUsage
}