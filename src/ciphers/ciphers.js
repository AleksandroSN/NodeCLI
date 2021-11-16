const {
  charCodeLowerCaseStart,
  charCodeLowerCaseEnd,
  charCodeUpperCaseStart,
  charCodeUpperCaseEnd,
  ceaserShift,
  rot8Shift,
  engAlphabetLength,
  checkCase,
} = require("../shared");

class Ciphers {
  constructor(str) {
    this.str = str;
  }

  encodeCipher(type) {
    const shift = type === "C" ? ceaserShift : rot8Shift;
    const codeStr = this.str.replace(/[a-zA-Z]/g, (letter) => {
      if (checkCase(letter)) {
        return String.fromCharCode(
          ((letter.charCodeAt(0) - charCodeUpperCaseStart + shift) %
            engAlphabetLength) +
            charCodeUpperCaseStart
        );
      }
      return String.fromCharCode(
        ((letter.charCodeAt(0) - charCodeLowerCaseStart + shift) %
          engAlphabetLength) +
          charCodeLowerCaseStart
      );
    });
    this.str = codeStr;
    return this.str;
  }

  decodeCipher(type) {
    const shift = type === "C" ? ceaserShift : rot8Shift;
    const codeStr = this.str.replace(/[a-zA-Z]/g, (letter) => {
      if (checkCase(letter)) {
        return String.fromCharCode(
          ((letter.charCodeAt(0) - charCodeUpperCaseEnd - shift) %
            engAlphabetLength) +
            charCodeUpperCaseEnd
        );
      }
      return String.fromCharCode(
        ((letter.charCodeAt(0) - charCodeLowerCaseEnd - shift) %
          engAlphabetLength) +
          charCodeLowerCaseEnd
      );
    });
    this.str = codeStr;
    return this.str;
  }

  atbashCipher() {
    const encodeStr = this.str.replace(/[a-zA-Z]/g, (letter) => {
      if (checkCase(letter)) {
        return String.fromCharCode(
          charCodeUpperCaseEnd - (letter.charCodeAt(0) - charCodeUpperCaseStart)
        );
      }
      return String.fromCharCode(
        charCodeLowerCaseEnd - (letter.charCodeAt(0) - charCodeLowerCaseStart)
      );
    });
    this.str = encodeStr;
    return this.str;
  }
}

module.exports = {
  Ciphers,
};
