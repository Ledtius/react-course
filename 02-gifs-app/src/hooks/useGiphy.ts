import { useEffect, useState } from "react";
import { giphyApi } from "../services/giphyApi";
import { useStorage } from "./useStorage";

export const useGiphy = () => {
  const [gifName, setGifName] = useState("");
  const [giphyData, setGiphyData] = useStorage();

  console.log(gifName);
  // const [giphyData, setGiphyData] = useStorage();

  let dataGif;
  /* Solo llama cuando se hizo el setGifName en el Form */
  useEffect(() => {
    dataGif = giphyApi(gifName);
    setGiphyData(dataGif);
  }, [gifName]);

  return [gifName, setGifName];
};
