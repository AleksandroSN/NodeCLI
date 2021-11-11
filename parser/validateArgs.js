const { exitHandler } = require("../shared");
const { validateConfig } = require("./validateConfig");

const validateArgs = (args) => {
  const configArgIdx = args.findIndex(
    (arg) => arg === "-c" || arg === "--config"
  );
  if (configArgIdx === -1) {
    exitHandler("No ConFig !!!\n", 10);
  }
  const config = args[configArgIdx + 1];
  const formatedConfig = config.split("-");
  validateConfig(formatedConfig);

  return args;
};

module.exports = {
  validateArgs,
};
