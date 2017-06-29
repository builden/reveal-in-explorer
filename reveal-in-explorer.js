const os = require('os');
const exec = require('child_process').exec;

module.exports = function revealInExplorer(filePath) {
  if (os.platform() === 'win32') {
    exec(`explorer "${filePath}"`);
  } else {
    throw new Error(`for the moment revealInExplorer not support ${os.platform()} platform`)
  }
}