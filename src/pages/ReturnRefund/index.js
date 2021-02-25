import React, { useEffect } from "react";
import Layout2 from "../../Layouts/Layout2";
import ReturnRefundContent from "./ReturnRefundContent";

const ReturnRefund = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <Layout2>
      <ReturnRefundContent />
    </Layout2>
  );
};

export default ReturnRefund;
