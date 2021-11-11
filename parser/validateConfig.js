const { exitHandler } = require("../shared");

const validateConfig = (config) => {
  config.forEach((el) => {
    const letter = el[0];
    const number = el[1];

    // validate {XY-}n format
    if (el.length > 2) {
      exitHandler("Wrong Config !!! Please use format {XY-}n\n", 15);
    }

    // validate upperCase
    if (letter !== letter.toUpperCase()) {
      exitHandler("Only UpperCase !!! Please use format {XY-}n\n", 44);
    }

    // validate ciphers
    if (letter !== "C" && letter !== "A" && letter !== "R") {
      exitHandler(
        "Valid arguments 'A' 'R' 'C'  !!! Please use format {XY-}n\n",
        5
      );
    }

    // validate number for Ceaser and ROT8 ciphers
    if (letter === "C" || letter === "R") {
      if (typeof number === "undefined") {
        exitHandler(
          "For Ceaser and Rot8 ciphers second argument is need\n",
          71
        );
      }
      if (number !== "0" && number !== "1") {
        exitHandler(
          "For Ceaser and Rot8 ciphers second argument must be 0 or 1\n",
          83
        );
      }
    }

    // validate number for Atbash cipher
    if (letter === "A" && typeof number !== "undefined") {
      exitHandler("For Atbash cipher second argument is no need\n", 90);
    }
  });
};

module.exports = {
  validateConfig,
};
