import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/images/Logo.png";
import data from "./data";

const classes = {
  navBtnClasses: {
    navBtnShow: "navbar-toggler collapsed show-menu navbar-toggler",
    navBtnClose: "navbar-toggler",
  },
  navMenuClasses: {
    navMenuShow:
      "navbar-collapse justify-content-end collapse show-menu navbarNav",
    navMenuHide: "navbar-collapse justify-content-end navbarNav",
  },
};

const Navbar = () => {
  const [navScroll, setNavScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, [navScroll]);

  const toggleLinks = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={navScroll ? "fixed" : ""}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link
            className="navbar-brand"
            to="home"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <img src={Logo} alt="LMiTS" className="img-fluid" />
          </Link>
          <button
            type="button"
            className={
              showMenu
                ? classes.navBtnClasses.navBtnShow
                : classes.navBtnClasses.navBtnClose
            }
            onClick={toggleLinks}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={
              showMenu
                ? classes.navMenuClasses.navMenuShow
                : classes.navMenuClasses.navMenuHide
            }
          >
            <ul className="navbar-nav">
              {data.map(({ id, title, path }) => {
                return (
                  <li key={id} className="nav-item">
                    <Link
                      to={path}
                      className="nav-link"
                      smooth={true}
                      duration={500}
                      spy={true}
                      exact="true"
                      offset={-80}
                    >
                      {title}
                    </Link>
                  </li>
                );
              })}
              {/* <li>
                <button className="btn btn-orange">Get Now</button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
