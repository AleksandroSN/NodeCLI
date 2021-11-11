const { createReadStream } = require("fs");
const { stdin, stderr } = require("process");
const { cliArgsFormatted, checkFileExt } = require("../shared");
const { getConfig } = require("../parser");

const readStream = () => {
  const path = getConfig(cliArgsFormatted.i, cliArgsFormatted.input);
  if (path) {
    const ext = checkFileExt(path);
    if (ext !== "txt") {
      stderr.write("wrong file ext or file is unaccesible\n");
      process.exitCode = 10;
    }
    return createReadStream(path, { encoding: "utf-8" });
  }

  return stdin;
};

module.exports = {
  readStream,
};
