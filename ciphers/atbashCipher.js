const {
  charCodeLowerCaseEnd,
  charCodeLowerCaseStart,
  charCodeUpperCaseEnd,
  charCodeUpperCaseStart,
} = require("../shared/constants");

const atbashCipher = (str) => {
  const encodeStr = str.replace(/[a-zA-Z]/g, (letter) => {
    if (
      letter.charCodeAt(0) >= charCodeUpperCaseStart &&
      letter.charCodeAt(0) <= charCodeUpperCaseEnd
    ) {
      return String.fromCharCode(
        charCodeUpperCaseEnd - (letter.charCodeAt(0) - charCodeUpperCaseStart)
      );
    }
    return String.fromCharCode(
      charCodeLowerCaseEnd - (letter.charCodeAt(0) - charCodeLowerCaseStart)
    );
  });
  return encodeStr;
};

module.exports = {
  atbashCipher,
};
