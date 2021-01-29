import React from "react";
import { data } from "./Service-Data";

const Service = () => {
  return (
    <section className="expect-bg" id="service">
      <div className="container">
        <div className="heading text-center">
          <h2 className="mt-0">Our Services</h2>
        </div>

        <div className="row justify-content-center">
          {data.map(({ id, icon, alt, title, subtitle }) => (
            <div className="col-lg-4 col-md-6 col-sm-10" key={id}>
              <div className="expect-content-bg">
                <div className="expect-img">
                  <img src={icon} alt={alt} className="img-fluid" />
                </div>
                <div className="expect-content">
                  <h5> {title} </h5>
                  <p>{subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Service };
