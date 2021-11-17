const { transformStream } = require("./transformStream");
const { transformStreamOptions } = require("./streamOptions");

const transformStreams = (transformConfig) => {
  const formatedConfig = transformConfig.split("-");
  const streams = formatedConfig.map((cipher) => {
    const [cipherArgName, encode] = cipher.split("");
    const streamOptions = transformStreamOptions[cipherArgName](
      cipherArgName,
      encode
    );
    return transformStream(streamOptions);
  });
  return streams;
};

module.exports = {
  transformStreams,
};
