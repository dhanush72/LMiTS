import React, { useEffect } from "react";
import Layout2 from "../../Layouts/Layout2";
import TCContent from "./TermsConditions";

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <TCContent />
    </Layout2>
  );
};

export default TermsConditions;
