import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import FooterLogo from "../../assets/images/footer_fleeta.svg";
import { FooterLinks } from "./Footer-Data";

const toggleHome = () => {
  scroll.scrollToTop();
};

const year = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-sm-5 footer-navbar-brand">
            <Link to="" className="navbar-brand" onClick={toggleHome}>
              <img src={FooterLogo} alt="" className="img-fluid" />
            </Link>
          </div>

          <div className="col-md-6 col-sm-6 text-right">
            <ul className="footer-content">
              {FooterLinks.map(({ id, title, path }) => {
                return (
                  <li key={id}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* <div className="col-md-4 col-sm-3 text-center">
            <ul className="footer-icon">
              {SocialLinks.map((item, index) => {
                const { icon, link } = item;
                return (
                  <li key={index}>
                    <a href={link} target="_blank" rel="noreferrer">
                      {icon}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div> */}
        </div>
        <hr />

        <p className="text-center mb-2">
          Copyright &copy; All Right Reserved{" "}
          <span>LMiTS Solutions Pvt Ltd. {year} </span>
        </p>
      </div>
    </footer>
  );
};

export { Footer };
