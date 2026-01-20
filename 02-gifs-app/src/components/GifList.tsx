import type { JSX } from "react";
import { useStorage } from "../hooks/useStorage";

export const GifList = (): JSX.Element => {
  console.log("GifList component!");
  const { gifUrls } = useStorage();
  console.log({ gifUrls });
  return (
    <>
      <section className="border-2 h-80">
        {}

        <img src="#" alt="" className="max-w-2xl max-h-2xl" />
      </section>
    </>
  );
};
