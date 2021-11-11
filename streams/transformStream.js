const { cliArgsFormatted, getConfig } = require("../shared");
const { streamLibs } = require("./streamHelper");

const transformStreams = () => {
  const config = getConfig(cliArgsFormatted.c, cliArgsFormatted.config);
  const formatedConfig = config.split("-");
  const streams = formatedConfig.map((cipher) => {
    const [cipherArgName, encode] = cipher.split("");
    return streamLibs[cipherArgName](cipherArgName, encode);
  });
  return streams;
};

module.exports = {
  transformStreams,
};
