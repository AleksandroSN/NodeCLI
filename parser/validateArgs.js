const { exit, stderr } = require("process");
const { validateConfig } = require("./validateConfig");

const validateArgs = (args) => {
  const configArgIdx = args.findIndex(
    (arg) => arg === "-c" || arg === "--config"
  );
  if (configArgIdx === -1) {
    stderr.write("No ConFig !!!");
    exit(55); // replace
  }
  const config = args[configArgIdx + 1];
  const formatedConfig = config.split("-");
  validateConfig(formatedConfig);

  return args;
};

module.exports = {
  validateArgs,
};
