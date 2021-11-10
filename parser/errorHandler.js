const { exit, stderr } = require("process");
const { cliArgs } = require("../shared");

const errorHandler = (args) => {
  let countDupes = 0;
  args.forEach((arg) => {
    cliArgs.forEach((cliArg) => {
      if (arg === cliArg) {
        countDupes += 1;
      }
    });
  });
  if (countDupes > 1) {
    stderr.write("arguments is duplicate");
    exit(55); // replace
  }
  return false;
};

module.exports = {
  errorHandler,
};
