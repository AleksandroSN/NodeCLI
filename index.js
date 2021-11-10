const { Ciphers } = require("./ciphers");

const cli = () => {
  const test = new Ciphers("ABC");
  const args = process.argv.slice(2);
  if (args[0] === "-c" || args[0] === "--config") {
    return console.log(test.atbashCipher("ABC"));
  }
  return console.log("Config is requried");
};

cli();
