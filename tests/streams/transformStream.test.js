const { PassThrough, pipeline } = require("stream");
const {
  CustomTransformAtbash,
  CustomTransformCeaserAndRot,
} = require("../../src/streams/transformStream");

const mockPipeline = (transformS) => {
  const mockedReadStream = new PassThrough();
  mockedReadStream.push("abc\n");
  pipeline(mockedReadStream, transformS, (err) => err);
};

describe("test transform streams", () => {
  const streamOptions = {
    chunk: "abc",
    enc: "utf8",
    cb: () => {},
  };

  it("atbash cipher", () => {
    const streamAtbash = new CustomTransformAtbash();
    mockPipeline(streamAtbash);
    streamAtbash.on("data", (chunk) => {
      expect(chunk.toString()).toMatch(/zyx/i);
    });
    streamAtbash._transform(
      streamOptions.chunk,
      streamOptions.enc,
      streamOptions.cb
    );
  });
  it("ceaser cipher encode", () => {
    const streamCeaser = new CustomTransformCeaserAndRot("C", "1");
    mockPipeline(streamCeaser);
    streamCeaser.on("data", (chunk) => {
      expect(chunk.toString()).toMatch(/bcd/i);
    });
    streamCeaser._transform(
      streamOptions.chunk,
      streamOptions.enc,
      streamOptions.cb
    );
  });
  it("ceaser cipher decode", () => {
    const streamCeaser = new CustomTransformCeaserAndRot("C", "0");
    mockPipeline(streamCeaser);
    streamCeaser.on("data", (chunk) => {
      expect(chunk.toString()).toMatch(/zab/i);
    });
    streamCeaser._transform(
      streamOptions.chunk,
      streamOptions.enc,
      streamOptions.cb
    );
  });
  it("rot8 cipher encode", () => {
    const streamRot8 = new CustomTransformCeaserAndRot("R", "1");
    mockPipeline(streamRot8);
    streamRot8.on("data", (chunk) => {
      expect(chunk.toString()).toMatch(/ijk/i);
    });
    streamRot8._transform(
      streamOptions.chunk,
      streamOptions.enc,
      streamOptions.cb
    );
  });
  it("rot8 cipher decode", () => {
    const streamRot8 = new CustomTransformCeaserAndRot("R", "0");
    mockPipeline(streamRot8);
    streamRot8.on("data", (chunk) => {
      expect(chunk.toString()).toMatch(/stu/i);
    });
    streamRot8._transform(
      streamOptions.chunk,
      streamOptions.enc,
      streamOptions.cb
    );
  });
});
