const { atbashTransformStream } = require("./atbashTransformStream");
const { ceaserTransformStream } = require("./ceaserTransformStream");
const { rot8TransformStream } = require("./rot8TransformStream");

const streamLibs = {
  C: ceaserTransformStream,
  R: rot8TransformStream,
  A: atbashTransformStream,
};

module.exports = {
  streamLibs,
};
