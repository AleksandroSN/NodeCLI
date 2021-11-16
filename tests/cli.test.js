const { exec } = require("child_process");
const fs = require("fs");

describe("scenarios with errors", () => {
  it("1. dupe arguments", async () => {
    await exec("node cli -c 'A-A' -c 'A-A'", (stderr) => {
      expect(stderr.message).toMatch(/duplicate/i);
    });
  });

  it("2. no config", async () => {
    await exec("node cli", (stderr) => {
      expect(stderr.message).toMatch(/No ConFig/i);
    });
  });

  it("3. -i: path to file doesn't exist or with no read access", async () => {
    await exec("node cli -c 'A-A' -i './inputt.txt'", (stderr) => {
      expect(stderr.message).toMatch(/No such file/i);
    });
  });

  it("4. -o: path to file doesn't exist or with no read access", async () => {
    await exec("node cli -c 'A-A' -o './output.doc'", (stderr) => {
      expect(stderr.message).toMatch(/wrong file ext/i);
    });
  });

  it("5. incorrect config", async () => {
    await exec("node cli -c 'AAA-A'", (stderr) => {
      expect(stderr.message).toMatch(/Wrong Config !!!/i);
    });
  });
});

describe("success scenarios", () => {
  it("1. all correct", async () => {
    await exec(
      "node cli --config 'A-A-R1-C1-R0-C0' -i './input.txt' -o './output.txt'"
    );
    const readStream = fs.createReadStream("./output.txt", {
      encoding: "utf8",
    });
    readStream.on("data", (chunk) => {
      expect(chunk).toMatch(/secret/i);
    });
  });

  it("2. some tests", async () => {
    await exec("node cli -c 'C1-C1-R0-A' -i './input.txt' -o './output.txt'");
    const readStream = fs.createReadStream("./output.txt", {
      encoding: "utf8",
    });
    readStream.on("data", (chunk) => {
      expect(chunk).toMatch(/Tbnnfzb/i);
    });
  });
  it("3. another test", async () => {
    await exec(
      "node cli -c 'A-A-A-R1-R0-R0-R0-C1-C1-A' -i './input.txt' -o './output.txt'"
    );
    const readStream = fs.createReadStream("./output.txt", {
      encoding: "utf8",
    });
    readStream.on("data", (chunk) => {
      expect(chunk).toMatch(/Asggous/i);
    });
  });
});
