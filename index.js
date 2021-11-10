const ciphers = require("./ciphers");

const cli = () => {
  const args = process.argv.slice(2);
  if (args[0] === "-c" || args[0] === "--config") {
    return console.log(ciphers.atbashCipher("ABC"));
  }
  return console.log("Config is requried");
};

cli();
