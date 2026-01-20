import { useEffect, useState } from "react";

export const useStorage = () => {
  console.log("useStorage!");
  const [storageValue, setStorageValue] = useState(
    () => JSON.parse(localStorage.getItem("gifsLS")) || {},
  );

  console.log({ storageValue });

  useEffect(() => {
    if (Object.keys(storageValue).length > 0) {
      localStorage.setItem("gifsLS", JSON.stringify(storageValue));
      console.log("LocalStorage Created!");
    }
  }, [storageValue]);

  let gifUrls: string[] = [];

  console.log(Object.keys(storageValue).length);

  if (Object.keys(storageValue).length > 0) {
    const { data } = storageValue;

    data.forEach((gifObj) => {
      const { bitly_gif_url } = gifObj;

      gifUrls.push(bitly_gif_url);
    });

    console.log(gifUrls);

    if (!localStorage.getItem("gifUrlsLS")) {
      console.log("No esta el gifUrlsLS");
      localStorage.setItem("gifUrlsLS", gifUrls);
    }
  }
  console.log(gifUrls);
  return { storageValue, setStorageValue, gifUrls };
};
