import { useState } from "react";
import { giphyApi } from "../services/giphyApi";

export const useGiphy = () => {
  const [gifName, setGifName] = useState("");
  console.log(gifName);

  /* Solo llama cuando se hizo el setGifName en el Form */
  if (gifName) giphyApi(gifName);

  return [gifName, setGifName];
};
