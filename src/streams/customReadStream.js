const fs = require("fs");
const { Readable } = require("stream");
const { exitHandler } = require("../shared");

class ReadStream extends Readable {
  constructor(filename, options) {
    super(options);
    this.filename = filename;
    this.fd = null;
  }

  _construct(callback) {
    fs.open(this.filename, "r", (err, fd) => {
      if (err && err.code === "ENOENT") {
        exitHandler("No such file or directory\n", 66);
      } else {
        this.fd = fd;
        callback();
      }
    });
  }

  _read(size) {
    this.buf = Buffer.alloc(size);
    fs.read(this.fd, this.buf, 0, size, null, (err, bytesRead) => {
      if (err) {
        this.destroy();
      } else {
        this.push(bytesRead > 0 ? this.buf.slice(0, bytesRead) : null);
      }
    });
  }
}

module.exports = {
  ReadStream,
};
