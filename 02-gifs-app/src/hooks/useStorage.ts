import { parse } from "path";
import { useEffect, useState } from "react";

export const useStorage = () => {
  const [storageValue, setStorageValue] = useState(
    () => JSON.parse(localStorage.getItem("gifsLS")) || {}
  );

  console.log("here useStorage!");
  console.log(storageValue);

  useEffect(() => {
    /* Si el objeto tiene un numero de claves mayor a 0 (Que tenga valor el objeto), envialo al localStorage, le agrege la condicion de adquirir item del localStorage para que no se este creando siempre */
    if (Object.keys(storageValue).length > 0) {
      localStorage.setItem("gifsLS", JSON.stringify(storageValue));
      console.log("LocalStorage Created!");
    }
  }, [storageValue]);

  /* Si el objeto tiene claves, destructuralo he imprime el valor de las urls. Creamos un array de URLs en el localStorage, movimos la instancia de gifUrls afuera para apoderlo retornar */

  let gifUrls: string[] = [];

  console.log(Object.keys(storageValue).length);
  if (Object.keys(storageValue).length > 0) {
    const { data } = storageValue;
    console.log(data);

    data.forEach((gifObj) => {
      const { bitly_gif_url } = gifObj;

      console.log(bitly_gif_url);
      gifUrls.push(bitly_gif_url);
    });

    console.log(gifUrls);

    if (!localStorage.getItem("gifUrlsLS")) {
      console.log("No esta el gifUrlsLS");
      localStorage.setItem("gifUrlsLS", gifUrls);
    }
  }

  return [storageValue, setStorageValue, gifUrls];
};
