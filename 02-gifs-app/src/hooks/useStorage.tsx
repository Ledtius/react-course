import { useEffect, useState } from "react";

export const useStorage = (data: Object = {}) => {
  console.log(data);
  const [giphyData, setGiphyData] = useState(1);

  // return;
  console.log("hola");

  // console.log(giphyData);

  // useEffect(() => {
  //   localStorage.setItem("giphyData", JSON.stringify(data));
  // }, [giphyData]);

  // console.log(giphyData);

  // return [giphyData, setGiphyData];
};
