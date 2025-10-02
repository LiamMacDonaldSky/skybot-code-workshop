import { fizzBuzz } from "./challenge3-fizzbuzz";

describe("Challenge 3: FizzBuzz", () => {
  test("should handle basic FizzBuzz sequence", () => {
    const result = fizzBuzz(15);
    console.log(result);
    expect(result).toEqual([
      "1",
      "2",
      "Fizz",
      "4",
      "Buzz",
      "Fizz",
      "7",
      "8",
      "Fizz",
      "Buzz",
      "11",
      "Fizz",
      "13",
      "14",
      "FizzBuzz",
    ]);
  });

  test("should handle n=3 (first Fizz)", () => {
    expect(fizzBuzz(3)).toEqual(["1", "2", "Fizz"]);
  });

  test("should handle n=5 (first Buzz)", () => {
    expect(fizzBuzz(5)).toEqual(["1", "2", "Fizz", "4", "Buzz"]);
  });

  test("should handle n=1 (single number)", () => {
    expect(fizzBuzz(1)).toEqual(["1"]);
  });

  test("should handle n=0 (empty array)", () => {
    expect(fizzBuzz(0)).toEqual([]);
  });

  test("should handle multiples of 3", () => {
    const result = fizzBuzz(9);
    expect(result[2]).toBe("Fizz"); // index 2 = number 3
    expect(result[5]).toBe("Fizz"); // index 5 = number 6
    expect(result[8]).toBe("Fizz"); // index 8 = number 9
  });

  test("should handle multiples of 5", () => {
    const result = fizzBuzz(10);
    expect(result[4]).toBe("Buzz"); // index 4 = number 5
    expect(result[9]).toBe("Buzz"); // index 9 = number 10
  });

  test("should handle multiples of both 3 and 5 (FizzBuzz)", () => {
    const result = fizzBuzz(30);
    expect(result[14]).toBe("FizzBuzz"); // index 14 = number 15
    expect(result[29]).toBe("FizzBuzz"); // index 29 = number 30
  });

  test("should return correct length", () => {
    expect(fizzBuzz(100)).toHaveLength(100);
    expect(fizzBuzz(20)).toHaveLength(20);
  });

  test("should handle larger numbers correctly", () => {
    const result = fizzBuzz(100);
    expect(result[99]).toBe("Buzz"); // index 99 = number 100
    expect(result[98]).toBe("Fizz"); // index 98 = number 99
  });

  test("should handle edge cases correctly", () => {
    // Numbers that are not multiples of 3 or 5
    const result = fizzBuzz(7);
    expect(result[0]).toBe("1");
    expect(result[1]).toBe("2");
    expect(result[3]).toBe("4");
    expect(result[6]).toBe("7");
  });
});
