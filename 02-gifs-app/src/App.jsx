import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { History } from "./components/History";
import { Pagination } from "./components/Pagination";
import { GifList } from "./components/GifList";
import { GiphyProvider } from "./context/GiphyProvider";

function App() {
  return (
    <>
      <GiphyProvider>
        <Title />
        <Form />
        <History />
        <GifList />
        <Pagination />
      </GiphyProvider>
    </>
  );
}

export default App;
