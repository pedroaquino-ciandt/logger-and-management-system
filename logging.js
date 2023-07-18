const fs = require("fs");
const path = require("path");

async function logMessage(logFile, message, logLevel) {
	const timestamp = new Date().toISOString().replace("T", " ").slice(0, 19);
	const logLine = `[${timestamp}] [${logLevel}] ${message}\n`;

	await fs.appendFile(logFile, logLine, (err) => {
		if (err) {
			console.error("Error writing to log file:", err);
		}
	});
}

module.exports = { logMessage };
