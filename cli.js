const { pipeline } = require("stream");
const { readStream, writeStream, transformStreams } = require("./src/streams");
const { errorHandler } = require("./src/shared");

const init = () => {
  try {
    pipeline(readStream(), ...transformStreams(), writeStream(), (err) => err);
  } catch (e) {
    errorHandler(e);
  }
};

init();

module.exports = { init };
