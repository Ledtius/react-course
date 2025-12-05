export const Form = () => {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input className="input" type="text" />
        <button className=" input">Buscar</button>
      </form>
    </>
  );
};
