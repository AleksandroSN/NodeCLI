const { stderr } = require("process");
const { errorHandler, CustomError } = require("../../src/shared");

describe("test for custom errors", () => {
  const error = new Error("usual");
  const customError = new CustomError("custom", 22);

  const mockFunc = (err) => {
    try {
      throw err;
    } catch (e) {
      errorHandler(e);
    }
  };

  it("custom error recieved with code", () => {
    const mockExitCode = jest
      .spyOn(process, "exit")
      .mockImplementation((code) => {
        throw new Error(`exitCode is ${code}`);
      });
    expect(() => mockFunc(customError)).toThrow();
    expect(mockExitCode).toHaveBeenCalledWith(22);
  });

  it("custom error recieved with message", () => {
    const mockStdErr = jest
      .spyOn(stderr, "write")
      .mockImplementation((text) => {
        throw new Error(`stderr is ${text}`);
      });
    expect(() => mockFunc(customError)).toThrow();
    expect(mockStdErr).toHaveBeenCalledWith("custom");
  });

  it("usual error recieved", () => {
    expect(() => mockFunc(error)).toThrowError("usual");
  });
});
