import { useState, type JSX } from "react";

export const Form = (): JSX.Element => {
  const [searchName, setSearchName] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
