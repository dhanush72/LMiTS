import React from "react";
import { data } from "./About-Data";

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

              {data.map(({ id, text, moreText }) => (
                <p className="dark-color" key={id}>
                  {text}
                  {moreText}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
