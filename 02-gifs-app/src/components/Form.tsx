import { useContext, useState, type JSX } from "react";
import { useGiphy } from "../hooks/useGiphy";
// import { giphyApi } from "../services/giphyApi.ts";

export const Form = (): JSX.Element => {
  const [searchName, setSearchName] = useState("");
  const [gifName, setGifName] = useGiphy();

  /* Cada vez que escribo, React re-renderiza el componente y llama a useGiphy una y otra vez */

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setGifName(searchName);

    setSearchName("");
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
            // console.log(value);
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
