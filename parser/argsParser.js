const { argv } = require("process");
const { errorHandlerArgs } = require("./errorHandler");
const { validateArgs } = require("./validateArgs");

const shortArg = (arg, args) => {
  if (arg.startsWith("-")) {
    const replaceArg = arg[1] === "-" ? "--" : "-";
    const key = arg.replace(replaceArg, "");
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
      ...shortArg(arg, argv),
    }),
    {}
  );
  return formatArgs;
};

module.exports = {
  argsParser,
};
