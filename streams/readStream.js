const { createReadStream } = require("fs");
const { stdin, stderr, exit } = require("process");
const { cliArgsFormatted, checkFileExt, getConfig } = require("../shared");

const readStream = () => {
  const path = getConfig(cliArgsFormatted.i, cliArgsFormatted.input);
  if (path) {
    const ext = checkFileExt(path);
    if (ext !== "txt") {
      stderr.write("wrong file ext or file is unaccesible");
      exit(55);
    }
    return createReadStream(path, { encoding: "utf-8" });
  }

  return stdin;
};

module.exports = {
  readStream,
};
