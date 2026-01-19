import { Form } from "./components/Form";
import { Title } from "./components/Title";
import { History } from "./components/History";
import { Pagination } from "./components/Pagination";
import { GifList } from "./components/GifList";


function App() {
  return (
    <>
      <Title />
      <Form />
      <History />
      <GifList />
      <Pagination />
    </>
  );
}

export default App;
