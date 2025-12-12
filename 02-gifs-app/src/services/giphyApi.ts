const API_KEY = import.meta.env.VITE_GIPHY_KEY;

console.log(API_KEY);

export const giphyApi = async (name: string = "goku"): Promise<T> => {
  const data = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${name}`
  );

  const response = await data;

  return response;
};
