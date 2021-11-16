const { validateArgs } = require("../../src/parser/validateArgs");

const mockArgs = ["-i", "./input.txt", "--output", "./output.txt"];

test("test throw error without config", () => {
  const testError = () => {
    validateArgs(mockArgs);
  };

  expect(testError).toThrowError(/ConFig/i);
});
