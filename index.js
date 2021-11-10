const { pipeline } = require("stream");
const { readStream, writeStream, transformStream } = require("./streams");

const init = () => {
  pipeline(readStream(), transformStream(), writeStream(), (err) => err);
};

init();
