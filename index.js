const { pipeline } = require("stream");
const { readStream, writeStream, transformStreams } = require("./streams");
const { errorHandler } = require("./shared");

const init = () => {
  try {
    pipeline(readStream(), ...transformStreams(), writeStream(), (err) => err);
  } catch (e) {
    errorHandler(e);
  }
};

init();
