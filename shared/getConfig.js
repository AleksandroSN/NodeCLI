const { cli } = require("../parser");

const getConfig = (shortConfig, fullConfig) => {
  const config = cli();
  const path = config[`${shortConfig}`]
    ? config[`${shortConfig}`]
    : config[`${fullConfig}`];
  return path;
};

module.exports = {
  getConfig,
};
