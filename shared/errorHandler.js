const { stderr } = require("process");

class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "Custom Errors";
    this.code = code;
  }
}

const errorHandler = (err) => {
  const { name, message, code } = err;

  if (name === "Custom Errors") {
    stderr.write(`${message}`);
    process.exitCode = code;
  } else throw err;
};

module.exports = {
  CustomError,
  errorHandler,
};
