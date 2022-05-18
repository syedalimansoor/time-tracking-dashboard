import { toKebabCase } from ".";

describe("toKebabCase", () => {
  it("should convert space separated words to kebab-case", () => {
    expect(toKebabCase("hello world")).toBe("hello-world");
    expect(toKebabCase("hello")).toBe("hello");
  });
  it("should convert all characters to lowercase", () => {
    expect(toKebabCase("Hello WORLD")).toBe("hello-world");
    expect(toKebabCase("HELLO")).toBe("hello");
  });
  it("should remove punctuation", () => {
    expect(toKebabCase("Hello, world!")).toBe("hello-world");
  });
});
