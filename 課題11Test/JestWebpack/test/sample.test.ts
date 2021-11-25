import { sum, fibonacci } from "../src/lib/sample";

describe("index.ts test", () => {
  test("sum test", () => {
    expect(sum(1, 3)).toBe(4);
    expect(sum(2, 5)).not.toBe(4);
  });

  test("fibonacci", () => {
    expect(fibonacci(1)).toBe(1);
    expect(fibonacci(10)).toBe(55);
    expect(fibonacci(20)).toBe(6765);
  });
});