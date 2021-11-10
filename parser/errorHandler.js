const { exit, stderr } = require("process");

const errorHandler = (args) => {
  const countDupes = {};
  args.forEach((arg) => {
    if (countDupes[arg]) {
      countDupes[arg] += 1;
    } else countDupes[arg] = 1;
  });

  Object.values(countDupes).forEach((count) => {
    if (count > 1) {
      stderr.write("arguments is duplicate");
      exit(55); // replace
    }
  });
};

module.exports = {
  errorHandler,
};
