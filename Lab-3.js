const os = require('os');
const fs = require('fs').promises;
const path = require('path');

// Function to get system information
function getSystemInfo() {
    return {
        osType: os.type(),
        totalMemory: os.totalmem(),
        freeMemory: os.freemem(),
        cpuDetails: os.cpus(),
    };
}

// Function to save system information to a log file
async function saveSystemInfoToFile(info) {
    const logDir = path.join(__dirname, 'logs');
    const logFilePath = path.join(logDir, 'system-info.txt');

    try {
        // Ensure the logs directory exists
        await fs.mkdir(logDir, { recursive: true });

        // Convert the system info object to a string
        const infoString = JSON.stringify(info, null, 2);

        // Write the system info to the log file
        await fs.writeFile(logFilePath, infoString);

        console.log(`System information saved to ${logFilePath}`);
    } catch (error) {
        console.error('Error saving system information:', error);
    }
}


    const systemInfo = getSystemInfo();
    console.log('System Information:', systemInfo);

    saveSystemInfoToFile(systemInfo);
