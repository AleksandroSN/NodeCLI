const { streamLibs } = require("./streamHelper");

const transformStreams = (transformConfig) => {
  const formatedConfig = transformConfig.split("-");
  const streams = formatedConfig.map((cipher) => {
    const [cipherArgName, encode] = cipher.split("");
    return streamLibs[cipherArgName](cipherArgName, encode);
  });
  return streams;
};

module.exports = {
  transformStreams,
};
