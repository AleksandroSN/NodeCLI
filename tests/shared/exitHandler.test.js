const { stderr } = require("process");
const { exitHandler } = require("../../src/shared");

describe("tests for handler of exit", () => {
  const mockFunc = () => {
    exitHandler("ERROR", 22);
  };

  it("test exitCode", () => {
    const mockExit = jest
      .spyOn(process, "exit")
      .mockImplementation((number) => {
        throw new Error(`process.exit: ${number}`);
      });
    expect(mockFunc).toThrow();
    expect(mockExit).toHaveBeenCalledWith(22);
  });

  it("test stderr message", () => {
    const mockStdErr = jest
      .spyOn(stderr, "write")
      .mockImplementation((text) => {
        throw new Error(`stderr is ${text}`);
      });
    expect(mockFunc).toThrow();
    expect(mockStdErr).toHaveBeenCalledWith("ERROR");
  });
});
