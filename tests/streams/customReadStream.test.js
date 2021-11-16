const { ReadStream } = require("../../src/streams/customReadStream");

test("dummy", () => {
  const sum = (a, b) => a + b;
  expect(sum(2, 3)).toBe(5);
});
