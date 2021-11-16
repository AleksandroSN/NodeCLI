const { validateConfig } = require("../../parser/validateConfig");

describe("tests validation for config", () => {
  it("validate {XY-}n format", () => {
    const testFormatLengthArg = () => {
      validateConfig(["AAA"]);
    };

    const testFormatEmptyArg = () => {
      validateConfig(["", "R1", "R0", "A", "C0"]);
    };

    expect(testFormatLengthArg).toThrowError(/{XY-}n/i);
    expect(testFormatEmptyArg).toThrowError(/{XY-}n/i);
  });

  it("validate only uppercase args", () => {
    const testFormatUpperCase = () => {
      validateConfig(["a", "r1", "r0", "a", "c0"]);
    };
    expect(testFormatUpperCase).toThrowError(/UpperCase/i);
  });

  it("validate arguments 'A' 'R' 'C'", () => {
    const testFormatARC = () => {
      validateConfig(["B", "F1", "R0", "A", "C0"]);
    };
    expect(testFormatARC).toThrowError(/Valid arguments 'A'/i);
  });

  it("validate second arguments for 'R' 'C'", () => {
    const testFormatSecondArg = () => {
      validateConfig(["A", "C", "R", "A", "C"]);
    };
    expect(testFormatSecondArg).toThrowError(/second argument is need/i);
  });

  it("validate second arguments for 'R' 'C' with wrong number", () => {
    const testFormatSecondArg = () => {
      validateConfig(["A", "C2", "R4", "A", "C"]);
    };
    expect(testFormatSecondArg).toThrowError(/must be 0 or 1/i);
  });

  it("validate second arguments for 'R' 'C' for corrects", () => {
    expect(validateConfig(["A", "C1", "R0", "A", "C1"])).toBeUndefined();
  });

  it("validate second arguments for 'A'", () => {
    const testFormatSecondArg = () => {
      validateConfig(["A2", "C1", "R0", "A", "C1"]);
    };
    expect(testFormatSecondArg).toThrowError(/For Atbash cipher second/i);
  });
});
