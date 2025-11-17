import { test, describe } from "vitest";
import { Counter } from "./Counter";
import { CounterProps } from "../types/general.types";

import { render, screen } from "@testing-library/react";

describe("Counter component", () => {
  test("asd", () => {
    const counterVariable = render(
      <Counter
        initial={1}
        step={3}
        onChange={(value) => {
          console.log(`Changed by: ${value}`);
        }}
      />
    );

    screen.debug();
    console.log({ counterVariable });
  });
});
