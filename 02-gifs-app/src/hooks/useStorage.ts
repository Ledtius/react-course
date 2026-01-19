import { useEffect, useState } from "react";
import { giphyApi } from "../services/giphyApi";

export const useStorage = () => {
  const [giphyData, setGiphyData] = useState(
    () => JSON.parse(localStorage.getItem("gifsLS")) || []
  );

  console.log("here useStorage!");
  if ((giphyData.length = 0)) localStorage.setItem("gifsLS", giphyData);

  return [giphyData, setGiphyData];
};
