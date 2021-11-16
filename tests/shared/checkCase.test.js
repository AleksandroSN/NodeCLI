const { checkCase } = require("../../src/shared");

test("str is lowerCase", () => {
  expect(checkCase("lowercase")).toBeFalsy();
});

test("str is UpperCase", () => {
  expect(checkCase("Uowercase")).toBeTruthy();
});
