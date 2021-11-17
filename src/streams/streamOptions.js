const { Ciphers } = require("../ciphers");

const transformStreamOptions = {
  A: function atbash() {
    return {
      transform(chunk, enc, cb) {
        const data = chunk.toString();
        const atbashCipher = new Ciphers(data).atbashCipher();
        cb(null, atbashCipher);
      },
    };
  },
  C: function ceaser(encode, type) {
    return {
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
    };
  },
  R: function rot8(encode, type) {
    return {
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
    };
  },
};

module.exports = {
  transformStreamOptions,
};
