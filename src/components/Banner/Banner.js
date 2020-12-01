import React from "react";
import { AppLinks } from "./Banner-Data";

const Banner = () => {
  return (
    <section className="home-banner" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 banner-content">
            <div className="main-heading">
              <h1>
                Sending <span>Simplified</span>
              </h1>
            </div>
            <div className="home-icon">
              <p>
                <span> Download Now.</span>
              </p>

              {AppLinks.map(({ id, icon, link }) => {
                return (
                  <a
                    key={id}
                    href={link}
                    className="img"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {icon}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="animation-4">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export { Banner };
