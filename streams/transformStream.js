const { Transform } = require("stream");

const transformStream = () => {
  return new Transform({
    transform(chunk, enc, cb) {
      const upperCase = chunk.toString().toUpperCase();
      cb(null, upperCase);
    },
  });
};

module.exports = {
  transformStream,
};
