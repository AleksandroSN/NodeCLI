const { errorHandlerArgs } = require("../../src/parser/errorHandler");

const mockConfig = [
  "-c",
  "A-A",
  "-i",
  "./input.txt",
  "-o",
  "./output.txt",
  "--coverage",
  "blabla",
];
const mockConfigWithDupes = [
  "-c",
  "A-A",
  "-i",
  "./input.txt",
  "-i",
  "./input.txt",
  "-o",
  "./output.txt",
];

const mockConfigVariousArg = [
  "-c",
  "A-A",
  "-i",
  "./input.txt",
  "--input",
  "./inputtt.txt",
  "-o",
  "./output.txt",
];

test("config is valid", () => {
  expect(errorHandlerArgs(mockConfig)).toBeUndefined();
});

test("config is invalid with dupes one argument", () => {
  const testError = () => {
    errorHandlerArgs(mockConfigWithDupes);
  };
  expect(testError).toThrowError(/duplicate/i);
});

test("config is invalid with various argument", () => {
  const testError = () => {
    errorHandlerArgs(mockConfigVariousArg);
  };
  expect(testError).toThrowError(/duplicate/i);
});
