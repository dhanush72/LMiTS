import React from "react";
import { aboutLMiTS, features } from "./About-Data";

const About = () => {
  return (
    <section className="d-margin feature-bg" id="about">
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-lg-6 col-sm-7">
            <div className="heading head">
              <h2>
                About <span>LMiTS</span>
              </h2>

              {aboutLMiTS.map(({ id, text }) => (
                <p className="dark-color" key={id}>
                  {text}
                </p>
              ))}
            </div>
            {features.map((data, index) => (
              <div className="media align-items-center mb-2" key={index}>
                <div className="about-image">{data.icon}</div>
                <div className="media-body contact-content">
                  <p className="mb-0">{data.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
