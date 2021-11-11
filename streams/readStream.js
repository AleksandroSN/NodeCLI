const { createReadStream } = require("fs");
const { stdin } = require("process");
const { cliArgsFormatted, CustomError, checkFileExt } = require("../shared");
const { getConfig } = require("../parser");

const readStream = () => {
  const path = getConfig(cliArgsFormatted.i, cliArgsFormatted.input);
  if (path) {
    const ext = checkFileExt(path);
    if (ext !== "txt") {
      throw new CustomError("wrong file ext or file is unaccesible\n", 10);
    }
    return createReadStream(path, { encoding: "utf-8" });
  }

  return stdin;
};

module.exports = {
  readStream,
};
