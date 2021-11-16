const { transformStreams } = require("../../src/streams/transformStream");

test("dummy", () => {
  const sum = (a, b) => a + b;
  expect(sum(2, 3)).toBe(5);
});
