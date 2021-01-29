import React from "react";
import * as data from "./data";

const TCContent = () => {
  return (
    <>
      <section className="privacy-banner">
        <div className="container">
          <div className="main-heading spark-head text-center">
            <h1 className="mb-0">Terms & Conditions</h1>
          </div>
        </div>
      </section>

      <section className="faq-priacy">
        <div className="container">
          <div className="privacy-content">
            {data.generalTerms.map(({ title, content }, index) => (
              <div key={index}>
                <h5>{title}</h5>
                <p>{content.text}</p>
                {content.map(({ text }, index) => (
                  <p className="mb-2" key={index}>
                    <span className="font-weight-bolder">&bull;</span> {text}
                  </p>
                ))}
              </div>
            ))}

            {data.definitionsAndkeyterms.map(({ title, content }, index) => (
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

            {data.license.map(({ title, content }, index) => (
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

            {data.restrictions.map(({ title, content }, index) => (
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

            {data.returnRefund.map(({ title, content }, index) => (
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

            {data.suggestions.map(({ title, content }, index) => (
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

            {data.consent.map(({ title, content }, index) => (
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

            {data.linksToOther.map(({ title, content }, index) => (
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

            {data.cookies.map(({ title, content }, index) => (
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

            {data.changeToOurTeam.map(({ title, content }, index) => (
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

            {data.modifications.map(({ title, content }, index) => (
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

            {data.updatesToWebsite.map(({ title, content }, index) => (
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

            {data.thirdPartyServices.map(({ title, content }, index) => (
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

            {data.termTermination.map(({ title, content }, index) => (
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

            {data.copyrightInfringement.map(({ title, content }, index) => (
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

            {data.indemnification.map(({ title, content }, index) => (
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

            {data.noWarranties.map(({ title, content }, index) => (
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

            {data.limitationOfLiability.map(({ title, content }, index) => (
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

            {data.severability.map(({ title, content }, index) => (
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

            {data.waiver.map(({ title, content }, index) => (
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

            {data.amendments.map(({ title, content }, index) => (
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

            {data.updatesToOurTerms.map(({ title, content }, index) => (
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

            {data.intellectualProperty.map(({ title, content }, index) => (
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

            {data.agreementToArbitrate.map(({ title, content }, index) => (
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

            {data.noticeOfDispute.map(({ title, content }, index) => (
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

            {data.bindingArbitration.map(({ title, content }, index) => (
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

            {data.submissionsAndPrivacy.map(({ title, content }, index) => (
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

            {data.promotions.map(({ title, content }, index) => (
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

            {data.typographicalErrors.map(({ title, content }, index) => (
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

            {data.miscellaneous.map(({ title, content }, index) => (
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

            {data.disclaimer.map(({ title, content }, index) => (
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
                    <span className="font-weight-bolder">&bull; </span> {text}
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

export default TCContent;
