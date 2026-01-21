import { useGiphy } from "../hooks/useGiphy";
import { GiphyContext } from "./GiphyContext";

export const GiphyProvider = ({ children }) => {
  console.log("Provider");
  const { gifName, setGifName } = useGiphy();

  return (
    <>
      <GiphyContext.Provider value={(gifName, setGifName)}>
        {children}
      </GiphyContext.Provider>
    </>
  );
};
