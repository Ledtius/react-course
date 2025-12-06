import type { JSX } from "react";

export const Pagination = (): JSX.Element => {
  return (
    <>
      <section className="flex justify-center gap-2">
        <button className="btn">{"<-"}</button>
        <div>
          <button className="btn">1</button>
        </div>
        <button className="btn">{"->"}</button>
      </section>
    </>
  );
};
