const { stderr } = require("process");

const exitHandler = (message, exitCode) => {
  stderr.write(`${message}`);
  process.exit(exitCode);
};

module.exports = {
  exitHandler,
};
