import { useState, useEffect, type JSX } from "react";
import type { CounterProps } from "../types/general.types.ts";

export function Counter({
  initial = 0,
  step = 2,
  onChange,
}: CounterProps): JSX.Element {
  const [counter, setCounter] = useState<number>(initial);

  // const [interval, setInterval] = useState<number>(counter);

  onChange(initial);
  return (
    <div className="text-center ">
      <h1 className="text-3xl font-medium mb-4">Counter</h1>
      <div className="flex flex-col items-center gap-4 w-fit bg-gray-300 p-4 shadow-sm rounded-sm">
        <div className="text-2xl bg-gray-100 w-full text-center rounded-sm inset-shadow-2xs font-medium">
          {counter}
        </div>
        <div className="flex justify-between w-full">
          <button
            onClick={() => {
              setCounter(counter + step);
            }}
            className="btn bg-green-400 text-white"
          >
            Increase
          </button>
          <button onClick={() => {}} className="btn bg-purple-400 text-white">
            Auto-increase
          </button>
          <button
            onClick={() => {
              setCounter(counter - step);
            }}
            className="btn bg-orange-400 text-white"
          >
            Decrease
          </button>
          <button
            onClick={() => {
              setCounter(initial);
            }}
            className="btn bg-red-500 text-white"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
