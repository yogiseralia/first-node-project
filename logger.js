var url = "https://mylogger.io/log";

function log(message) {
    // Send HTTP request
    console.log(message);
}

module.exports.log = log;