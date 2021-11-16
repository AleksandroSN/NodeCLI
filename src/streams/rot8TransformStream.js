const { Transform } = require("stream");
const { Ciphers } = require("../ciphers");

const rot8TransformStream = (type, encode) => {
  return new Transform({
    transform(chunk, enc, cb) {
      const data = chunk.toString();
      if (encode === "1") {
        const rot8Cipher = new Ciphers(data).encodeCipher(type);
        cb(null, rot8Cipher);
      }
      if (encode === "0") {
        const rot8Cipher = new Ciphers(data).decodeCipher(type);
        cb(null, rot8Cipher);
      }
    },
  });
};

module.exports = {
  rot8TransformStream,
};
