const checkFileExt = (str) => {
  const lastDot = str.lastIndexOf(".");
  const ext = str.slice(lastDot + 1);
  return ext;
};

module.exports = {
  checkFileExt,
};
