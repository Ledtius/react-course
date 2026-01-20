import { useEffect, useState } from "react";
import { giphyApi } from "../services/giphyApi";
import { useStorage } from "./useStorage";

export const useGiphy = () => {
  console.log("useGiphy!");

  const [gifName, setGifName] = useState("");

  const { setStorageValue } = useStorage();

  console.log({ gifName });

  useEffect(() => {
    if (gifName) giphyApi(gifName, setStorageValue);
  }, [gifName]);

  return { gifName, setGifName };
};
