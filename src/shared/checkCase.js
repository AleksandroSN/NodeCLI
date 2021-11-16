const { charCodeUpperCaseStart, charCodeUpperCaseEnd } = require("./constants");

const checkCase = (str) => {
  return (
    str.charCodeAt(0) >= charCodeUpperCaseStart &&
    str.charCodeAt(0) <= charCodeUpperCaseEnd
  );
};

module.exports = {
  checkCase,
};
