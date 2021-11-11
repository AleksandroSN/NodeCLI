const { pipeline } = require("stream");
const { readStream, writeStream, transformStreams } = require("./streams");

const init = () => {
  pipeline(readStream(), ...transformStreams(), writeStream(), (err) => err);
};

init();
