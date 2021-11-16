const { atbashTransformStream } = require("../../src/streams/atbashTransformStream");

test("dummy", () => {
  const sum = (a, b) => a + b;
  expect(sum(2, 3)).toBe(5);
});
