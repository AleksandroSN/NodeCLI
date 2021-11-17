const { pipeline } = require("stream");
const { readStream, writeStream, transformStreams } = require("./src/streams");
const { errorHandler } = require("./src/shared");
const { argsParser } = require("./src/parser");

const init = () => {
  try {
    const { input, output, config } = argsParser();
    pipeline(
      readStream(input),
      ...transformStreams(config),
      writeStream(output),
      (err) => err
    );
  } catch (e) {
    errorHandler(e);
  }
  console.log("\x1b[32m", "Finish ! Check your output file");
};

init();
