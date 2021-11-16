const { Ciphers } = require("../../src/ciphers");

test("encrypt str with ceaser cipher", () => {
  const ceaserCipher = new Ciphers("randOm text");
  expect(ceaserCipher.encodeCipher("C")).toBe("sboePn ufyu");
  expect(ceaserCipher.encodeCipher("C")).toBe("tcpfQo vgzv");
});

test("decrypt str with ceaser cipher", () => {
  const ceaserCipher = new Ciphers("tcpfQo vgzv");
  expect(ceaserCipher.decodeCipher("C")).toBe("sboePn ufyu");
  expect(ceaserCipher.decodeCipher("C")).toBe("randOm text");
});

test("encrypt str with rot8 cipher", () => {
  const rot8Cipher = new Ciphers("ranNNNDDDdom text");
  expect(rot8Cipher.encodeCipher("R")).toBe("zivVVVLLLlwu bmfb");
  expect(rot8Cipher.encodeCipher("R")).toBe("hqdDDDTTTtec junj");
});

test("decrypt str with rot8 cipher", () => {
  const rot8Cipher = new Ciphers("hqdDDDTTTtec junj");
  expect(rot8Cipher.decodeCipher("R")).toBe("zivVVVLLLlwu bmfb");
  expect(rot8Cipher.decodeCipher("R")).toBe("ranNNNDDDdom text");
});

test("decrypt and encrypt str with atbash cipher", () => {
  const atbashCipher = new Ciphers("ranNNNDDDdom text");
  expect(atbashCipher.atbashCipher()).toBe("izmMMMWWWwln gvcg");
  expect(atbashCipher.atbashCipher()).toBe("ranNNNDDDdom text");
});

// C1-R1-C0-C0-A-R0-R1-R1-A-C1
test("final test with many encode-decode", () => {
  const cipher = new Ciphers("random text");
  expect(cipher.encodeCipher("C")).toBe("sboepn ufyu");
  expect(cipher.encodeCipher("R")).toBe("ajwmxv cngc");
  expect(cipher.decodeCipher("C")).toBe("zivlwu bmfb");
  expect(cipher.decodeCipher("C")).toBe("yhukvt alea");
  expect(cipher.atbashCipher()).toBe("bsfpeg zovz");
  expect(cipher.decodeCipher("R")).toBe("tkxhwy rgnr");
  expect(cipher.encodeCipher("R")).toBe("bsfpeg zovz");
  expect(cipher.encodeCipher("R")).toBe("janxmo hwdh");
  expect(cipher.atbashCipher()).toBe("qzmcnl sdws");
  expect(cipher.encodeCipher("C")).toBe("random text");
});
