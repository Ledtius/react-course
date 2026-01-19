import { useStorage } from "../hooks/useStorage";

const API_KEY = import.meta.env.VITE_GIPHY_KEY;

export const giphyApi = async (name: string, setStorageValue: Function) => {
  // const [storageValue, setStorageValue] = useStorage();
  console.log("here! giphyAPI");
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}`
    );

    console.log(name);

    const data = await response.json();
    console.log(data);
    console.log("seStorageValue API");
    setStorageValue(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
