const { stdin } = require("process");
const { CustomError, checkFileExt } = require("../shared");
const { ReadStream } = require("./customReadStream");

const readStream = (inputConfig) => {
  if (inputConfig) {
    const ext = checkFileExt(inputConfig);
    if (ext !== "txt") {
      throw new CustomError(
        "ERROR: wrong file ext or file is unaccesible\n",
        10
      );
    }
    return new ReadStream(inputConfig);
  }
  stdin.write("Write text for ciphering. For exit press CTRL+C\n");
  return stdin;
};

module.exports = {
  readStream,
};
