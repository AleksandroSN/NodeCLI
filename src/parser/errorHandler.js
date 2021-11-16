const { CustomError, cliArgsNotFormatted } = require("../shared");

const errorHandlerArgs = (args) => {
  const dupesSet = new Set(args);
  if (dupesSet.size !== args.length) {
    throw new CustomError("ERROR: arguments is duplicate\n", 22);
  }

  if (
    (dupesSet.has(cliArgsNotFormatted["-c"]) &&
      dupesSet.has(cliArgsNotFormatted["--config"])) ||
    (dupesSet.has(cliArgsNotFormatted["-i"]) &&
      dupesSet.has(cliArgsNotFormatted["--input"])) ||
    (dupesSet.has(cliArgsNotFormatted["-o"]) &&
      dupesSet.has(cliArgsNotFormatted["--output"]))
  ) {
    throw new CustomError("ERROR: arguments is duplicate\n", 22);
  }
};

module.exports = {
  errorHandlerArgs,
};
