import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  test("Should render with default values", () => {
    render(
      <Counter
        initial={1}
        step={3}
        onChange={(value) => {
          console.log(`Changed by: ${value}`);
        }}
      />
    );

    expect(screen.getByText("Counter")).toBeDefined()
  });
});
