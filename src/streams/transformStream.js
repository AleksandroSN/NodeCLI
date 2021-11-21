/* eslint-disable max-classes-per-file */
const { Transform } = require("stream");
const { Ciphers } = require("../ciphers");

class CustomTransformAtbash extends Transform {
  // eslint-disable-next-line class-methods-use-this
  _transform(chunk, enc, cb) {
    const data = chunk.toString();
    const modifyData = new Ciphers(data).atbashCipher();
    cb(null, modifyData);
  }
}

class CustomTransformCeaserAndRot extends Transform {
  constructor(type, encode) {
    super();
    this.type = type;
    this.encode = encode;
  }

  _transform(chunk, enc, cb) {
    const data = chunk.toString();
    if (this.encode === "1") {
      const modifyData = new Ciphers(data).encodeCipher(this.type);
      cb(null, modifyData);
    }
    if (this.encode === "0") {
      const modifyData = new Ciphers(data).decodeCipher(this.type);
      cb(null, modifyData);
    }
  }
}

module.exports = {
  CustomTransformAtbash,
  CustomTransformCeaserAndRot,
};
