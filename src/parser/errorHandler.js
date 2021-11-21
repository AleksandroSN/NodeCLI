const { CustomError, cliArgs } = require("../shared");

const errorHandlerArgs = (args) => {
  const dupesSet = new Set(args);
  if (dupesSet.size !== args.length) {
    throw new CustomError("ERROR: arguments is duplicate\n", 22);
  }

  if (
    (dupesSet.has(cliArgs.c) && dupesSet.has(cliArgs.config)) ||
    (dupesSet.has(cliArgs.i) && dupesSet.has(cliArgs.input)) ||
    (dupesSet.has(cliArgs.o) && dupesSet.has(cliArgs.output))
  ) {
    throw new CustomError("ERROR: arguments is duplicate\n", 22);
  }
};

module.exports = {
  errorHandlerArgs,
};
