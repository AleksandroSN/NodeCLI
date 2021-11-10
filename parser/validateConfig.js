const { exit, stderr } = require("process");

const validateConfig = (config) => {
  config.forEach((el) => {
    const letter = el[0];
    const number = el[1];

    // validate {XY-}n format
    if (el.length > 2) {
      stderr.write("Wrong Config !!! Please use format {XY-}n");
      exit(55); // replace
    }

    // validate upperCase
    if (letter !== letter.toUpperCase()) {
      stderr.write("Only UpperCase !!! Please use format {XY-}n");
      exit(55);
    }

    // validate ciphers
    if (letter !== "C" && letter !== "A" && letter !== "R") {
      stderr.write("Valid arguments 'A' 'R' 'C'  !!! Please use format {XY-}n");
      exit(55);
    }

    // validate number for Ceaser and ROT8 ciphers
    if (letter === "C" || letter === "R") {
      if (typeof number === "undefined") {
        stderr.write("For Ceaser and Rot8 ciphers second argument is need");
        exit(55);
      }
      if (number !== "0" && number !== "1") {
        stderr.write(
          "For Ceaser and Rot8 ciphers second argument must be 0 or 1"
        );
        exit(55);
      }
    }

    // validate number for Atbash cipher
    if (letter === "A" && typeof number !== "undefined") {
      stderr.write("For Atbash cipher second argument is no need");
      exit(55);
    }
  });
};

module.exports = {
  validateConfig,
};
