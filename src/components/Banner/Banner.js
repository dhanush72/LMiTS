import React from "react";
import { Link } from "react-router-dom";
import { AppLinks } from "./Banner-Data";

const Banner = () => {
  return (
    <section className="home-banner" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5">
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
                  <Link
                    key={id}
                    to="/"
                    onClick={() => window.open({ link }, "_blank")}
                    className="img"
                  >
                    {icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Banner };
