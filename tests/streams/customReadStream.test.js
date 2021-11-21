const fs = require("fs");
const { ReadStream } = require("../../src/streams/customReadStream");

const filename = "./input.txt";
const wrongFile = "./inputt.txt";
const readStreamOptions = {
  encoding: "utf8",
};
const flag = "r";
const fsOpenParams = {
  path: "",
  flag: "",
};
const errUsual = {
  message: "ERROR",
  code: "USUAL",
};
const errCustom = {
  message: "ERROR",
  code: "ENOENT",
};
const errRead = new Error("destroy stream");
const cb = () => {};
const mockFsOpen = (err) => {
  const jestSpy = jest
    .spyOn(fs, "open")
    .mockImplementation((file, opnmd, callback) => {
      callback(err, 22);
      fsOpenParams.path = file;
      fsOpenParams.flag = opnmd;
    });
  return jestSpy;
};
const mockFsRead = (err, bytes) => {
  const jestSpyFsRead = jest
    .spyOn(fs, "read")
    .mockImplementation((fd, buf, len, size, pos, callback) => {
      callback(err, bytes);
    });
  return jestSpyFsRead;
};

process.exit = jest.fn(() => {
  return "mockExit";
});

describe("tests for custom read stream", () => {
  describe("test construct method", () => {
    it("all correct", () => {
      const spy = mockFsOpen(errUsual);
      const stream = new ReadStream(filename, readStreamOptions);
      stream._construct(cb);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(fsOpenParams.path).toBe(filename);
      expect(fsOpenParams.flag).toBe(flag);
      expect(stream.fd).toBe(22);
      spy.mockRestore();
    });

    it("wrong file", () => {
      const spyStdErr = jest
        .spyOn(process.stderr, "write")
        .mockImplementation((text) => {
          return text;
        });
      const spyProcExit = jest
        .spyOn(process, "exit")
        .mockImplementation((code) => {
          return code;
        });
      const spy = mockFsOpen(errCustom);
      const stream = new ReadStream(wrongFile, readStreamOptions);
      stream._construct(cb);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spyProcExit).toHaveBeenCalledWith(66);
      expect(spyStdErr).toHaveBeenCalledWith("No such file or directory\n");
      spy.mockRestore();
    });
  });
  describe("test read method", () => {
    it("read file is correct and bytes for read > 0", () => {
      const spy = mockFsRead(null, 55);
      const stream = new ReadStream(filename, readStreamOptions);
      stream._read(55);
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
    it("read file is correct and bytes for read <= 0", () => {
      const spy = mockFsRead(null, null);
      const stream = new ReadStream(filename, readStreamOptions);
      stream._read(55);
      expect(spy).toHaveBeenCalledTimes(1);
      spy.mockRestore();
    });
    it("error while reading", () => {
      const spy = mockFsRead(errRead);
      const stream = new ReadStream(filename, readStreamOptions);
      stream._read(55);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(stream.destroyed).toBeTruthy();
      spy.mockRestore();
    });
  });
});
