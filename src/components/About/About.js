import React, { useState } from "react";
import { data } from "./About-Data";
import { Link } from "react-router-dom";
import Line from "../../assets/images/line.png";

const About = () => {
  const [readMore, setReadMore] = useState(false);
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
                </p>
              ))}

              {readMore && (
                <p className="dark-color">
                  The era of technological innovation has revolutionized the way
                  the world use to function. It has impacted every other
                  industry we know and is helping to transform them at an
                  unprecedented rate. The logistics sector has also been
                  disrupted by this technological transformation as it is not
                  only helping in reducing the friction in the world of
                  logistics but is also making it a more efficient and automated
                  process.
                </p>
              )}

              <h5
                className="about-read-more"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "Read less" : "Read more"}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { About };
