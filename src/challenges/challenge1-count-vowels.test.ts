import { countVowels } from "./challenge1-count-vowels";

describe("Challenge 1: Count Vowels", () => {
  test('should count 2 vowels in "hello"', () => {
    const result = countVowels("hello");
    expect(result).toBe(2);
  });

  test('should count 2 vowels in "TypeScript"', () => {
    const result = countVowels("TypeScript");
    expect(result).toBe(2);
  });

  test('should count 4 vowels in "coding is fun!"', () => {
    const result = countVowels("coding is fun!");
    expect(result).toBe(4);
  });

  test('should count 3 vowels in "HELLO WORLD" (case insensitive)', () => {
    const result = countVowels("HELLO WORLD");
    expect(result).toBe(3);
  });

  test("should return 0 for empty string", () => {
    const result = countVowels("");
    expect(result).toBe(0);
  });

  test("should return 0 for string with no vowels", () => {
    const result = countVowels("bcdfg");
    expect(result).toBe(0);
  });

  test("should count vowels in mixed case", () => {
    const result = countVowels("AeIoU");
    expect(result).toBe(5);
  });

  test("should handle numbers and special characters", () => {
    const result = countVowels("123!@# aeiou");
    expect(result).toBe(5);
  });
});
