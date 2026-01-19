import { useEffect, useState } from "react";
import { giphyApi } from "../services/giphyApi";
import { useStorage } from "./useStorage";

export const useGiphy = () => {
  const [gifName, setGifName] = useState("");

  /* Ya vimos que en el Form llamo el useGiphy, ahora se llamare el useStorage, luego el gifName de useGiphy, y asi susesivamente, es por orden */
  const [storageValue, setStorageValue] = useStorage();

  console.log({ gifName });

  /* Solo llama cuando se hizo el setGifName en el Form y el gifName es truly o tiene valor, ya que si no se ejecutara siempre en el primer render el llamado del giphyApi */

  useEffect(() => {
    if (gifName) giphyApi(gifName, setStorageValue);
  }, [gifName]);

  return [gifName, setGifName];
};
