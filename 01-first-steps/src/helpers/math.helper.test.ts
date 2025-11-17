import { describe, expect, test } from "vitest";
import { add, multiply, subtract } from "./math.helper";

describe("add", () => {
  test("should add two positives numbers", () => {
    // * Testing sections

    // ! 1. Arrange
    const a: number = 1;
    const b: number = 3;

    // ! 2. Act
    const result = add(a, b);
    console.log(result);

    // ! 3. Assert
    expect(result).toBe(4);
  });
});

describe("subtract", () => {
  test("should subtract two positive numbers", () => {
    // ! 1. Arrange
    const a: number = 2;
    const b: number = 4;

    // ! 2. Act

    const result = subtract(a, b);

    // ! 3. Assert

    expect(result).toBe(a - b);
  });
  test("should subtract two positive numbers", () => {
    // ! 1. Arrange
    const a: number = -2;
    const b: number = 4;

    // ! 2. Act

    const result = subtract(a, b);

    // ! 3. Assert

    expect(result).toBe(-6);
  });
});

describe("multiply", () => {
  test("should multiply two positive numbers", () => {
    // ! 1. Arrange
    const a: number = 23;
    const b: number = 2;

    // ! 2. Act

    const result = multiply(a, b);

    // ! 3. Assert

    expect(result).toBe(46);
  });
  test("should multiply two positive numbers", () => {
    // ! 1. Arrange
    const a: number = 2;
    const b: number = 4;

    // ! 2. Act

    const result = multiply(a, b);

    // ! 3. Assert

    expect(result).toBe(a * b);
  });
});
