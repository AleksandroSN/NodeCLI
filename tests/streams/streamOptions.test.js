const { transformStreamOptions } = require("../../src/streams/streamOptions");

const mockConfig = "A";
const mockConfig2 = "R";
const mockConfig3 = "C";
const encode = "1";
const decode = "0";
const cb = (err, data) => data;

test("test stream options", () => {
  const options = transformStreamOptions[mockConfig]();
  expect(options).toHaveProperty("transform");
  const test = options.transform("ABC", "ut8", cb);
  expect(test).toBeUndefined();
});

test("test stream options", () => {
  const options = transformStreamOptions[mockConfig2](encode, mockConfig2);
  expect(options).toHaveProperty("transform");
  const test = options.transform("ABC", "ut8", cb);
  expect(test).toBeUndefined();
});

test("test stream options", () => {
  const options = transformStreamOptions[mockConfig2](decode, mockConfig2);
  expect(options).toHaveProperty("transform");
  const test = options.transform("ABC", "ut8", cb);
  expect(test).toBeUndefined();
});

test("test stream options", () => {
  const options = transformStreamOptions[mockConfig3](encode, mockConfig3);
  expect(options).toHaveProperty("transform");
  const test = options.transform("ABC", "ut8", cb);
  expect(test).toBeUndefined();
});

test("test stream options", () => {
  const options = transformStreamOptions[mockConfig3](decode, mockConfig3);
  expect(options).toHaveProperty("transform");
  const test = options.transform("ABC", "ut8", cb);
  expect(test).toBeUndefined();
});
