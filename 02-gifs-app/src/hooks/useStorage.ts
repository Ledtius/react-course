import { useEffect, useState } from "react";

export const useStorage = () => {
  const [storageValue, setStorageValue] = useState(
    () => JSON.parse(localStorage.getItem("gifsLS")) || {}
  );

  console.log("here useStorage!");
  console.log(storageValue);

  useEffect(() => {

    /* Si el objeto tiene un numero de claves mayor a 0 (Que tenga valor el objeto), envialo al localStorage */
    if (Object.keys(storageValue).length > 0) {
      localStorage.setItem("gifsLS", storageValue);
      console.log("LocalStorage Created!");
    }
  }, [storageValue]);

  console.log(Object.keys(storageValue).length);
  if (Object.keys(storageValue).length > 0)
    return [storageValue, setStorageValue];
};
