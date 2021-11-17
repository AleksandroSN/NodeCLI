const { argsParser } = require("../../src/parser");

process.argv.push("--output", "./output.txt", "-c", "A-A", "-i", "./input.txt");

test("get valid short config", () => {
  const { input, output, config } = argsParser();
  expect(input).toBe("./input.txt");
  expect(output).toBe("./output.txt");
  expect(config).toBe("A-A");
});
