import { useState, type JSX } from "react";

export const Form = (): JSX.Element => {
  return (
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <input className="input" type="text" />
        <button className=" input cursor-pointer">Buscar</button>
      </form>
    </>
  );
};
