const {
  CustomTransformAtbash,
  CustomTransformCeaserAndRot,
} = require("./transformStream");

const streamLibs = {
  C: CustomTransformCeaserAndRot,
  R: CustomTransformCeaserAndRot,
  A: CustomTransformAtbash,
};

module.exports = {
  streamLibs,
};
