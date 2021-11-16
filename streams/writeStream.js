const { createWriteStream } = require("fs");
const { stdout } = require("process");
const { cliArgsFormatted, checkFileExt, CustomError } = require("../shared");
const { getConfig } = require("../parser");

const writeStream = () => {
  const path = getConfig(cliArgsFormatted.o, cliArgsFormatted.output);
  if (path) {
    const ext = checkFileExt(path);
    if (ext !== "txt") {
      throw new CustomError(
        "ERROR: wrong file ext or file is unaccesible\n",
        55
      );
    }
    return createWriteStream(path, {
      flags: "a",
      encoding: "utf-8",
    }).on("finish", () => {
      stdout.write("Finish ! Check your output file \n");
    });
  }

  return stdout;
};

module.exports = {
  writeStream,
};
