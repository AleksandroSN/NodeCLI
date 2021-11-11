const { stderr, exit } = require("process");

const exitHandler = (message, exitCode) => {
  stderr.write(`${message}`);
  process.exitCode = exitCode;
  exit();
};

module.exports = {
  exitHandler,
};
