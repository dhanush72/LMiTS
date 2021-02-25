import React from "react";
import * as data from "./data";

const ReturnRefundContent = () => {
  return (
    <>
      <section className="privacy-banner">
        <div className="container">
          <div className="main-heading spark-head text-center">
            <h1 className="mb-0">Cancellation & Refund Policy</h1>
          </div>
        </div>
      </section>

      <section className="faq-priacy">
        <div className="container">
          <div className="privacy-content">
            {data.definitionsAndkeyterm.map(
              ({ title, description, content }, index) => (
                <div key={index}>
                  <h5>{title}</h5>
                  <p>{description}</p>
                  <p>{content.text}</p>
                  {content.map(({ text }, index) => (
                    <p className="mb-2" key={index}>
                      <span className="font-weight-bolder">&bull;</span> {text}
                    </p>
                  ))}
                </div>
              )
            )}

            {data.returnAndRefund.map(({ title, content }, index) => (
              <div className="mt-5" key={index}>
                <h5>{title}</h5>
                <p>{content.text}</p>
                {content.map(({ text }, index) => (
                  <p className="mb-2" key={index}>
                    <span className="font-weight-bolder">&bull;</span> {text}
                  </p>
                ))}
              </div>
            ))}

            {data.refunds.map(({ title, content }, index) => (
              <div className="mt-5" key={index}>
                <h5>{title}</h5>
                <p>{content.text}</p>
                {content.map(({ text }, index) => (
                  <p className="mb-2" key={index}>
                    <span className="font-weight-bolder">&bull;</span> {text}
                  </p>
                ))}
              </div>
            ))}

            {data.shipping.map(({ title, content }, index) => (
              <div className="mt-5" key={index}>
                <h5>{title}</h5>
                <p>{content.text}</p>
                {content.map(({ text }, index) => (
                  <p className="mb-2" key={index}>
                    <span className="font-weight-bolder">&bull;</span> {text}
                  </p>
                ))}
              </div>
            ))}

            {data.yourConsent.map(({ title, content }, index) => (
              <div className="mt-5" key={index}>
                <h5>{title}</h5>
                <p>{content.text}</p>
                {content.map(({ text }, index) => (
                  <p className="mb-2" key={index}>
                    <span className="font-weight-bolder">&bull;</span> {text}
                  </p>
                ))}
              </div>
            ))}

            {data.changesToOurReturn.map(({ title, content }, index) => (
              <div className="mt-5" key={index}>
                <h5>{title}</h5>
                <p>{content.text}</p>
                {content.map(({ text }, index) => (
                  <p className="mb-2" key={index}>
                    <span className="font-weight-bolder">&bull;</span> {text}
                  </p>
                ))}
              </div>
            ))}

            {data.contactUs.map(({ title, content }, index) => (
              <div className="mt-5" key={index}>
                <h5>{title}</h5>
                <p>{content.text}</p>
                {content.map(({ text }, index) => (
                  <p className="mb-2" key={index}>
                    <span className="font-weight-bolder">&bull;</span> {text}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ReturnRefundContent;
