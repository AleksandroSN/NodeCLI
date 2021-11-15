const { getConfig } = require("../../parser");
const { cliArgsFormatted } = require("../../shared");

process.argv.push("-c", "A-A", "-i", "./input.txt");

test("get valid short config", () => {
  expect(getConfig(cliArgsFormatted.i, cliArgsFormatted.input)).toBe(
    "./input.txt"
  );
});
