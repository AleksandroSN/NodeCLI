const { PassThrough, pipeline } = require("stream");
const { Ciphers } = require("../../src/ciphers");
const { transformStream } = require("../../src/streams/transformStream");

const atbashOptions = {
  transform(chunk, enc, cb) {
    const data = chunk.toString();
    const atbashCipher = new Ciphers(data).atbashCipher();
    cb(null, atbashCipher);
  },
};

const mockPipeline = (transformS) => {
  const mockedReadStream = new PassThrough();
  mockedReadStream.push("abc\n");
  pipeline(mockedReadStream, transformS, (err) => err);
};

describe("test transform stream with atbash cipher", () => {
  const streamAtbash = transformStream(atbashOptions);
  mockPipeline(streamAtbash);

  it("check chunk", () => {
    streamAtbash.on("data", (chunk) => {
      expect(chunk.toString()).toMatch(/zyx/i);
    });
  });
});
