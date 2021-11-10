const { createWriteStream } = require("fs");
const { stdin } = require("process");

const writeStream = () => {
  const some = createWriteStream("./output.txt", {
    flags: "a",
    encoding: "utf-8",
  });
  stdin.pipe(some);
  return some;
};

module.exports = {
  writeStream,
};
