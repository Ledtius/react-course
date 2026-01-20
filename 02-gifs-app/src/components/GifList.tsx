import type { JSX } from "react";
import { useStorage } from "../hooks/useStorage";

export const GifList = (): JSX.Element => {
  console.log("GifList component!");
  const { gifUrls } = useStorage();
  console.log({ gifUrls });

  /*   const list = gifUrls.map((url) => (
    <img src={url} key={url} alt="gif" className="max-w-2xl max-h-2xl" />
  ));
 */
  return (
    <>
      <section className="border-2 h-80">
        {gifUrls.map((url) => (
          <img src={url} key={url} alt="gif" className="max-w-2xl max-h-2xl" />
        ))}
      </section>
    </>
  );
};
