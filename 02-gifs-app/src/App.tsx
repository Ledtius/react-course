import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { History } from "./components/History";
import { Pagination } from "./components/Pagination";
import { GifList } from "./components/GifList";

import { giphyApi } from "./services/giphyApi";

import { GiphyContext } from "./context/GiphyContext";
const hola = "♥4";
const hol = "♥4";
function App() {
  return (
    <>
      <GiphyContext.Provider value={hola}>
        <Title />
        <Form />
        <History />
        <GifList />
        <Pagination />
      </GiphyContext.Provider>
    </>
  );
}

export default App;
