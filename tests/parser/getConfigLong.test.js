const { getConfig } = require("../../src/parser");
const { cliArgsFormatted } = require("../../src/shared");

process.argv.push("-c", "A-A", "--input", "./input.txt");

test("get valid full config", () => {
  expect(getConfig(cliArgsFormatted.i, cliArgsFormatted.input)).toBe(
    "./input.txt"
  );
});
