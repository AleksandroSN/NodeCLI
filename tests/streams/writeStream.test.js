const fs = require("fs");
const { Writable, PassThrough, pipeline } = require("stream");
const { writeStream } = require("../../src/streams/writeStream");

const spyStdOut = jest.spyOn(console, "log").mockImplementation((text) => text);

const mockPipeline = (stream) => {
  const mockedReadStream = new PassThrough();
  mockedReadStream.push("abc\n");
  pipeline(mockedReadStream, stream, (err) => err);
};

describe("tests for write stream", () => {
  it("correct arg", () => {
    const stream = writeStream("./output.txt");
    mockPipeline(stream);
    const readStream = fs.createReadStream("./output.txt", {
      encoding: "utf8",
    });
    readStream.on("data", (chunk) => {
      expect(chunk).toMatch(/abc/i);
    });
  });

  it("check finish event", () => {
    const stream = writeStream("./output.txt");
    stream.emit("finish");
    expect(spyStdOut).toHaveBeenCalledWith(
      "\x1b[32m",
      "Finish ! Check your output file"
    );
  });

  it("wrong arg, throw error", () => {
    expect(() => writeStream("./output.doc")).toThrowError(
      /ext or file is una/i
    );
  });

  it("non arg", () => {
    const stream = writeStream();
    expect(stream instanceof Writable).toBeTruthy();
  });
});
