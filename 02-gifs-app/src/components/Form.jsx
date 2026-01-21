import { useContext, useEffect, useState } from "react";
import { GiphyContext } from "../context/GiphyContext";

export const Form = () => {
  console.log("Form component!");
  const [searchName, setSearchName] = useState("");

  const { gifName, setGifName } = useContext(GiphyContext);

  const handleClick = () => {
    setSearchName("");
    setGifName(() => searchName);
  };

  return (
    <>
      <form
        onSubmit={() => {
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
