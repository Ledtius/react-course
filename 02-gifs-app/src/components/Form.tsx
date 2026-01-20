import { useContext, useEffect, useState, type JSX } from "react";
import { useGiphy } from "../hooks/useGiphy";

export const Form = (): JSX.Element => {
  console.log("Form component!");
  const [searchName, setSearchName] = useState("");

  const { setGifName } = useGiphy();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchName("");
    setGifName(() => searchName);
  };

  return (
    <>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <input
          className="input"
          type="text"
          value={searchName}
          onChange={(e) => {
            const value = e.target.value;
            setSearchName(value);
          }}
        />
        <button className="input cursor-pointer" onClick={handleClick}>
          Buscar
        </button>
      </form>
    </>
  );
};
