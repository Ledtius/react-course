import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter prove", () => {
  test("Value of the h1", () => {
    const { container } = render(
      <Counter
        initial={1}
        step={3}
        onChange={(value) => {
          console.log(`Changed by: ${value}`);
        }}
      />
    );

    console.log(container.innerHTML);
    screen.debug();
  });
});
