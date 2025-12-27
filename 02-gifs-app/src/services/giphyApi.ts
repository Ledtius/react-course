import { useStorage } from "../hooks/useStorage.tsx";

const API_KEY = import.meta.env.VITE_GIPHY_KEY;

console.log(API_KEY);

export const giphyApi = async (name: string = "goku") => {
  try {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}`
    );
    // useStorage();
    console.log(name);

    const data = await response.json();

    useStorage(data);

    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
  }
};
