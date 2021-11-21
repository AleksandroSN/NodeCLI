const { transformStreams } = require("../../src/streams/transformStreams");

test("test count streams", () => {
  const streamArr = transformStreams("A-A-A-A");
  expect(streamArr.length).toBe(4);
});
