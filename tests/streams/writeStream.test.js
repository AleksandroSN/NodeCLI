const { Writable } = require("stream");
const { writeStream } = require("../../src/streams/writeStream");

describe("tests for write stream", () => {
  it("correct arg", () => {
    const stream = writeStream("./output.txt");
    expect(stream instanceof Writable).toBeTruthy();
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
