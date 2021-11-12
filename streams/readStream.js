const { stdin } = require("process");
const { cliArgsFormatted, CustomError, checkFileExt } = require("../shared");
const { getConfig } = require("../parser");
const { ReadStream } = require("./customReadStream");

const readStream = () => {
  const path = getConfig(cliArgsFormatted.i, cliArgsFormatted.input);
  if (path) {
    const ext = checkFileExt(path);
    if (ext !== "txt") {
      throw new CustomError("wrong file ext or file is unaccesible\n", 10);
    }
    return new ReadStream(path);
  }

  return stdin;
};

module.exports = {
  readStream,
};
