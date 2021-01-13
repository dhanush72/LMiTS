import React from "react";
import { FeatureOneTwo } from "./Feature-Data";
import { FeatureThreeFour } from "./Feature-Data";

const Features = () => {
  return (
    <section className="effective-bg">
      <div className="container">
        <div className="heading text-center">
          <h2>Features</h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-sm-10 effective">
            {FeatureOneTwo.map(({ id, img, alt, title, subtitle }) => {
              return (
                <div className="effective-content-bg" key={id}>
                  <div className="effective-img">
                    <img src={img} alt={alt} className="img-fluid" />
                  </div>
                  <div className="effective-content">
                    <h5>{title}</h5>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="col-lg-4 sol-sm-10 effective-image"></div>

          <div className="col-lg-4 col-sm-10 effective">
            {FeatureThreeFour.map(({ id, img, alt, title, subtitle }) => {
              return (
                <div className="effective-content-bg" key={id}>
                  <div className="effective-img">
                    <img src={img} alt={alt} className="img-fluid" />
                  </div>
                  <div className="effective-content">
                    <h5>{title}</h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Features };
