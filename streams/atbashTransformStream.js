const { Transform } = require("stream");
const { Ciphers } = require("../ciphers");

const atbashTransformStream = () => {
  return new Transform({
    transform(chunk, enc, cb) {
      const data = chunk.toString();
      const atbashCipher = new Ciphers(data).atbashCipher();
      cb(null, atbashCipher);
    },
  });
};

module.exports = {
  atbashTransformStream,
};
