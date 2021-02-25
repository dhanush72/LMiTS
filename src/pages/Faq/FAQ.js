import React, { useState, useEffect } from "react";
import FaqHeader from "./Faq-header";
import FaqBody from "./Faq-body";
import { data } from "./data";
import Layout2 from "../../Layouts/Layout2";

const FAQ = () => {
  const [questions] = useState(data);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout2>
      <FaqHeader />
      <section className="faq-privacy">
        <div className="container">
          {questions.map((item) => (
            <FaqBody key={item.id} {...item} />
          ))}
        </div>
      </section>
    </Layout2>
  );
};

export default FAQ;
