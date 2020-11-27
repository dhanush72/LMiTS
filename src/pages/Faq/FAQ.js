import React, { useState } from "react";
import FaqHeader from "./Faq-header";
import FaqBody from "./Faq-body";
import { data } from "./data";

const FAQ = () => {
  const [questions, setQuesions] = useState(data);
  return (
    <>
      <FaqHeader />
      <section className="faq-privacy">
        <div className="container">
          {questions.map((item) => (
            <FaqBody key={item.id} {...item} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FAQ;
