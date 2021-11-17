const { createWriteStream } = require("fs");
const { stdout } = require("process");
const { checkFileExt, CustomError } = require("../shared");

const writeStream = (outputConfig) => {
  if (outputConfig) {
    const ext = checkFileExt(outputConfig);
    if (ext !== "txt") {
      throw new CustomError(
        "ERROR: wrong file ext or file is unaccesible\n",
        55
      );
    }
    return createWriteStream(outputConfig, {
      flags: "a",
      encoding: "utf-8",
    });
  }
  return stdout;
};

module.exports = {
  writeStream,
};
