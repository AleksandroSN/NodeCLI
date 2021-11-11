const { createReadStream } = require("fs");
const { stdin } = require("process");
const { cli } = require("../parser");
const { cliArgsFormatted } = require("../shared");

const readStream = () => {
  const config = cli();
  const path = config[cliArgsFormatted.i]
    ? config[cliArgsFormatted.i]
    : config[cliArgsFormatted.input];

  if (path) {
    const file = createReadStream(path, { encoding: "utf-8" });
    // file.on("data", (chunk) => console.log(chunk));
    return file;
  }

  return stdin;
};

module.exports = {
  readStream,
};
