const getApplicationMetrics = () => {
        return {
            memoryUsage: process.memoryUsage(),
            uptime: process.uptime(),
            currentWorkingDirectory: process.cwd(),
            pid: process.pid,
            platform: process.platform,
            noderelease: process.release,
            resourceUsage: process.resourceUsage,
        }
}

module.exports = {
    getApplicationMetrics
}