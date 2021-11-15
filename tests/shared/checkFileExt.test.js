const { checkFileExt } = require("../../shared");

test("file extenstion is correct", () => {
  expect(checkFileExt("./input.txt")).toBe("txt");
  expect(checkFileExt("./somefile.doc")).toBe("doc");
  expect(checkFileExt("./somefile.jpg")).toBe("jpg");
  expect(checkFileExt("./somefile.csv")).toBe("csv");
});
