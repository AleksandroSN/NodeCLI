const { Transform } = require("stream");

const transformStream = (options) => {
  return new Transform(options);
};

module.exports = {
  transformStream,
};
