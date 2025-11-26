import { describe, test, expect } from "vitest";
import { queryAllByAltText, render, screen } from "@testing-library/react";
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
    // screen.debug();
    // console.log(container.innerHTML);

    const h1 = container.querySelector("h1");
    const h2 = container.querySelector("button");

    // console.log(h1?.innerHTML);
    expect(h1?.innerHTML).toBe("Counter");
    expect(h2?.innerHTML).toBe("Increase");
  });

  test("Value of the h1 - screen", () => {
    render(
      <Counter
        initial={1}
        step={3}
        onChange={(value) => {
          console.log(`Changed by: ${value}`);
        }}
      />
    );

    // screen.debug();
    // console.log(container.innerHTML);
    screen.debug();

    // const h1 = screen.getByRole("heading", {
    //   level: 1,
    // });

    const h1 = screen.getByTestId("h1-id");

    console.log(h1?.innerHTML);
    expect(h1?.innerHTML).toContain("Counter");
  });

  test("Should match snapshot", () => {
    const { container } = render(
      <Counter
        initial={1}
        step={3}
        onChange={(value) => {
          console.log(`Changed by: ${value}`);
        }}
      />
    );

    expect(container).toMatchSnapshot()
  });
});
