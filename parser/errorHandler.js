const { CustomError } = require("../shared");

const errorHandlerArgs = (args) => {
  const countDupes = {};
  args.forEach((arg) => {
    if (countDupes[arg]) {
      countDupes[arg] += 1;
    } else countDupes[arg] = 1;
  });

  Object.values(countDupes).forEach((count) => {
    if (count > 1) {
      throw new CustomError("arguments is duplicate\n", 22);
    }
  });
};

module.exports = {
  errorHandlerArgs,
};
