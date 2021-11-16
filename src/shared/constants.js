const charCodeLowerCaseStart = 97;
const charCodeLowerCaseEnd = 122;
const charCodeUpperCaseStart = 65;
const charCodeUpperCaseEnd = 90;
const engAlphabetLength = 26;
const ceaserShift = 1;
const rot8Shift = 8;
const cliArgsNotFormatted = {
  "-c": "-c",
  "--config": "--config",
  "-i": "-i",
  "--input": "--input",
  "-o": "-o",
  "--output": "--output",
};
const cliArgsFormatted = {
  c: "c",
  config: "config",
  i: "i",
  input: "input",
  o: "o",
  output: "output",
};

module.exports = {
  charCodeLowerCaseStart,
  charCodeLowerCaseEnd,
  charCodeUpperCaseStart,
  charCodeUpperCaseEnd,
  engAlphabetLength,
  ceaserShift,
  rot8Shift,
  cliArgsNotFormatted,
  cliArgsFormatted,
};
