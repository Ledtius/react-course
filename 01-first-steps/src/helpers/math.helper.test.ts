import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("Add description", () => {
  test("Should addition two numbers", () => {
    // ! Arrange

    const a: number = 2;
    const b: number = 4;

    // ! Act

    const result = add(a, b);

    //! Assert

    expect(result).toBe(6);
  });
});

describe("Subtract description", () => {
  test("Should subtract two numbers", () => {
    // ! Arrange

    const num1: number = 34;
    const num2: number = 14;

    // ! Act

    const result = subtract(num1, num2);

    // ! Assert

    expect(result).toBe(20);
  });

  test("Two", () => {
    // ! Arrange

    const num1: number = 10;
    const num2: number = -10;

    // ! Act

    const result = subtract(num1, num2);

    // ! Assert

    expect(result).toBe(20);
  });
});

describe("Multiply description", () => {
  test("Should multiply two numbers", () => {
    // ! Arrange
    const x: number = 45;
    const y: number = -3;

    // ! Act

    const result = multiply(x, y);
    // ! Assert

    expect(result).toBe(-135);
  });
  test("Two", () => {
    // ! Arrange
    const x: number = 100;
    const y: number = -3;

    // ! Act

    const result = multiply(x, y);
    // ! Assert

    expect(result).toBe(x * y);
  });
});
