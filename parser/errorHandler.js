const { CustomError } = require("../shared");

const errorHandlerArgs = (args) => {
  const countDupes = {};
  args.forEach((arg) => {
    const lastMinus = arg.lastIndexOf("-");
    const firstLetter = arg.slice(lastMinus + 1)[0];
    if (countDupes[firstLetter]) {
      countDupes[firstLetter] += 1;
    } else countDupes[firstLetter] = 1;
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
