import { useState, type JSX } from "react";

export const Form = (): JSX.Element => {
  const [searchName, setSearchName] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSearchName("");

    fetch(
      "https://api.giphy.com/v1/gifs/search?api_key=oHplZomtqbhDvoZFZn4UVzr48Cms7OBD&q=goku"
    )
      .then((r) => r.json())
      .then((d) => console.log(d))
      .catch(console.error);

    // fetch(
    //   "https://api.giphy.com/v1/gifs/translate?api_key=oHplZomtqbhDvoZFZn4UVzr48Cms7OBD&s=asdasdsa"
    // )
    //   .then((r) => r.json())
    //   .then((d) => console.log(d))
    //   .catch(console.error);
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
