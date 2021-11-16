const { ReadStream } = require("../../src/streams/customReadStream");

describe("test read stream", () => {
  const mockPath = "./input.txt";
  // const mockWrongPath = "./inputt.txt";
  const mockFn = jest.fn();

  it("test correct path", () => {
    const stream = new ReadStream(mockPath, { encoding: "utf8" });
    stream.on("data", (data) => {
      expect(data.toString()).toMatch(/secret/i);
    });
  });

  it("test _construct method", async () => {
    const stream = await new ReadStream(mockPath, { encoding: "utf8" });
    // const mockExit = jest
    //   .spyOn(process, "exit")
    //   .mockImplementation((number) => {
    //     throw new Error(`process.exit: ${number}`);
    //   });

    await expect(stream._construct(mockFn)).toBeUndefined();
    // await expect(mockExit).toHaveBeenCalledWith(66);
  });
});
