import React, { useEffect } from "react";
import FAQ from "./FAQ";

const Faq = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <FAQ />
    </>
  );
};

export default Faq;
