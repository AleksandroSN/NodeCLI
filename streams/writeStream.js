const { createWriteStream } = require("fs");
const { stdout, stderr, exit } = require("process");
const { cliArgsFormatted, checkFileExt, getConfig } = require("../shared");

const writeStream = () => {
  const path = getConfig(cliArgsFormatted.o, cliArgsFormatted.output);
  if (path) {
    const ext = checkFileExt(path);
    if (ext !== "txt") {
      stderr.write("wrong file ext or file is unaccesible");
      exit(55);
    }
    return createWriteStream(path, {
      flags: "a",
      encoding: "utf-8",
    });
  }

  return stdout;
};

module.exports = {
  writeStream,
};
