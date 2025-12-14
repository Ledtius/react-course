import { useContext, useState, type JSX } from "react";

import { GiphyContext } from "../context/GiphyContext";
import { giphyApi } from "../services/giphyApi";

// const {} = useContext(GiphyContext);

const [searchName, setSearchName] = useState("");
export const Form = (): JSX.Element => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    giphyApi(searchName);
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
            console.log(value);
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
