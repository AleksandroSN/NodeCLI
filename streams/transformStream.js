const { cli } = require("../parser");
const { cliArgsFormatted } = require("../shared");
const { atbashTransformStream } = require("./atbashTransformStream");
const { ceaserTransformStream } = require("./ceaserTransformStream");
const { rot8TransformStream } = require("./rot8TransformStream");

const transformStreams = () => {
  // move to shared
  // --START--
  const args = cli();
  const config = args[cliArgsFormatted.c]
    ? args[cliArgsFormatted.c]
    : args[cliArgsFormatted.config];
  const formatedConfig = config.split("-");
  // --END--
  const streams = formatedConfig.map((cipher) => {
    const [cipherArgName, encode] = cipher.split("");
    if (cipherArgName === "C") {
      return ceaserTransformStream(cipherArgName, encode);
    }
    if (cipherArgName === "R") {
      return rot8TransformStream(cipherArgName, encode);
    }
    if (cipherArgName === "A") {
      return atbashTransformStream();
    }
    return cipher;
  });
  return streams;
};

module.exports = {
  transformStreams,
};
