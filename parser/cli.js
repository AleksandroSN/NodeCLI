const { argsParser } = require("./argsParser");

const cli = () => {
  const args = argsParser();
  return args;
};

module.exports = {
  cli,
};
