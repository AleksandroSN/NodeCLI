const { Readable } = require("stream");
const { readStream } = require("../../src/streams/readStream");

describe("tests for read stream", () => {
  it("correct arg", () => {
    const stream = readStream("./input.txt");
    expect(stream instanceof Readable).toBeTruthy();
  });

  it("wrong arg, throw error", () => {
    expect(() => readStream("./input.doc")).toThrowError(/ext or file is una/i);
  });

  it("non arg", () => {
    const stream = readStream();
    expect(stream instanceof Readable).toBeTruthy();
  });
});
