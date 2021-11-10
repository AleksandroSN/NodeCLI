const { argv } = require("process");
const { errorHandler } = require("./errorHandler");

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
  errorHandler(args);
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
