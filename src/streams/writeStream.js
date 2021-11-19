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
    }).on("finish", () => {
      console.log("\x1b[32m", "Finish ! Check your output file");
    });
  }
  return stdout;
};

module.exports = {
  writeStream,
};
