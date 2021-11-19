const { streamLibs } = require("./streamHelper");

const transformStreams = (transformConfig) => {
  const formatedConfig = transformConfig.split("-");
  const streams = formatedConfig.map((cipher) => {
    const [cipherArgName, encode] = cipher.split("");
    const Stream = streamLibs[cipherArgName];
    return new Stream(cipherArgName, encode);
  });
  return streams;
};

module.exports = {
  transformStreams,
};
