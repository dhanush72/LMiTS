import React, { useEffect } from "react";
import Layout2 from "../../Layouts/Layout2";
import PrivacyContent from "./PrivacyContent";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <Layout2>
      <PrivacyContent />
    </Layout2>
  );
};

export default PrivacyPolicy;
