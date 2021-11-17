const { ReadStream } = require("../../src/streams/customReadStream");

describe("test read stream", () => {
  const mockPath = "./input.txt";
  // const mockWrongPath = "./inputt.txt";
  // const mockFn = jest.fn();
  // const mockStdErr = jest
  //   .spyOn(process.stderr, "write")
  //   .mockImplementation((text) => {
  //     throw new Error(text);
  //   });

  // const test = () => {
  //   // eslint-disable-next-line no-new
  //   new ReadStream(mockWrongPath);
  // };

  it("test correct path", () => {
    const stream = new ReadStream(mockPath, { encoding: "utf8" });
    stream.on("data", (data) => {
      expect(data.toString()).toMatch(/secret/i);
    });
  });

  // it("test wrong path", () => {
    // const stream =
    // expect(() => test).toThrow();
    // expect(mockStdErr).toHaveBeenCalled();
    // process.stdout.on("data", (chunk) => {
    //   expect(chunk).toMatch(/file or direc/i);
    // });
  // });

  // it("test _construct method", () => {
  //   const stream = new ReadStream(mockPath, { encoding: "utf8" });
  //   expect(stream._construct(mockFn)).toBeUndefined();
  // });

  // it("test _read method", () => {
  //   const stream = new ReadStream(mockPath, { encoding: "utf8" });
  //   stream.push("string");
  //   stream.on("data", (chunk) => {
  //     expect(chunk.toString()).toMatch(/string/i);
  //   });
  // });
});
