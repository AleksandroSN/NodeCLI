const { CustomError } = require("../shared");
const { validateConfig } = require("./validateConfig");

const validateArgs = (args) => {
  const configArgIdx = args.findIndex(
    (arg) => arg === "-c" || arg === "--config"
  );
  if (configArgIdx === -1) {
    throw new CustomError("ERROR: No ConFig !!!\n", 10);
  }
  const config = args[configArgIdx + 1];
  const formatedConfig = config.split("-");
  validateConfig(formatedConfig);

  return args;
};

module.exports = {
  validateArgs,
};
