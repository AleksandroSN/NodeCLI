const { Transform } = require("stream");
const {
  atbashTransformStream,
} = require("../../src/streams/atbashTransformStream");

test("test transform stream with atbash cipher", () => {
  const streamAtbash = atbashTransformStream();
  const bool = streamAtbash instanceof Transform;
  expect(bool).toBeTruthy();
});
