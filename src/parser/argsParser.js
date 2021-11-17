const { argv } = require("process");
const { fullArgs } = require("../shared");
const { errorHandlerArgs } = require("./errorHandler");
const { validateArgs } = require("./validateArgs");

const formatArg = (arg, args) => {
  if (fullArgs[arg]) {
    const key = arg.replace(arg, fullArgs[arg]);
    const idx = args.findIndex((x) => x === arg);
    const nextValue = args[idx + 1];
    return { [key]: nextValue };
  }
  return {};
};

const argsParser = () => {
  const args = argv.slice(2);
  errorHandlerArgs(args);
  validateArgs(args);
  const formatArgs = args.reduce(
    (accArgs, arg) => ({
      ...accArgs,
      ...formatArg(arg, argv),
    }),
    {}
  );
  return formatArgs;
};

module.exports = {
  argsParser,
};
