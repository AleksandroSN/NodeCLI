const { Transform } = require("stream");
const { Ciphers } = require("../ciphers");

const ceaserTransformStream = (type, encode) => {
  return new Transform({
    transform(chunk, enc, cb) {
      const data = chunk.toString();
      if (encode === "1") {
        const ceaserCipher = new Ciphers(data).encodeCipher(type);
        cb(null, ceaserCipher);
      }
      if (encode === "0") {
        const ceaserCipher = new Ciphers(data).decodeCipher(type);
        cb(null, ceaserCipher);
      }
    },
  });
};

module.exports = {
  ceaserTransformStream,
};
