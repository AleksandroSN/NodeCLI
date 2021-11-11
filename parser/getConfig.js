const { argsParser } = require("./argsParser");

const getConfig = (shortConfig, fullConfig) => {
  const config = argsParser();
  const path = config[`${shortConfig}`]
    ? config[`${shortConfig}`]
    : config[`${fullConfig}`];
  return path;
};

module.exports = {
  getConfig,
};
