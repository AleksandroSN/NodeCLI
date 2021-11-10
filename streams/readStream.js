const { createReadStream } = require("fs");
const { cli } = require("../parser");

const readStream = () => {
  const config = cli();
  console.log(config);
  const file = createReadStream("./input.txt");

  file.setEncoding("utf8");
  file.on("data", (chunk) => console.log(chunk));
  return file;
};

module.exports = {
  readStream,
};
