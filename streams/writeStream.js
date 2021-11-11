const { createWriteStream } = require("fs");

const writeStream = () => {
  const some = createWriteStream("./output.txt", {
    flags: "a",
    encoding: "utf-8",
  });
  return some;
};

module.exports = {
  writeStream,
};
