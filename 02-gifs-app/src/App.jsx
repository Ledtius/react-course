import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { History } from "./components/History";
import { Pagination } from "./components/Pagination";
import { GifList } from "./components/GifList";

import { GiphyContext } from "./context/GiphyContext";

import { useStorage } from "./hooks/useStorage";

function App() {
  const { gifUrls } = useStorage();

  return (
    <>
      <GiphyContext.Provider value={{ gifUrls }}>
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
