import { Counter } from "./components/Counter";
// import "./index.module.css";
import { CounterProps } from "./types/general.types";
import { useState } from "react";

function App() {
  return (
    <div className="flex justify-center p-10 w-screen">
      <Counter
        initial={1}
        step={3}
        onChange={(value) => {
          console.log(`Changed by: ${value}`);
        }}
      />
    </div>
  );
}

export default App;
