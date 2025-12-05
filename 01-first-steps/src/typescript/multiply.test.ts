import { multiply2 } from "./multiply";
import { expect, test } from "vitest";

test("Should be 12 value in the multiply", () => {
  // ! Arrange
  const a: number = 3;
  const b: number = 4;

  // ! Act
  const result = multiply2(a, b);

  // ! Assert

  expect(result).toBe(12);
});

test("Should be -10 value in the multiply", () => {
  // ! Arrange
  const a: number = -2;
  const b: number = 5;

  // ! Act
  const result = multiply2(a, b);

  // ! Assert

  expect(result).toBe(-10);
});
