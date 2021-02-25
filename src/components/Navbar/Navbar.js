import React, { useState, useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-router-dom";
import FleetaDark from "../../assets/images/fleeta_logo.svg";
import FleetaWhite from "../../assets/images/footer_fleeta.svg";

const classes = {
  navBtnClasses: {
    navBtnShow: "navbar-toggler collapsed show-menu navbar-toggler",
    navBtnClose: "navbar-toggler ",
  },
  navMenuClasses: {
    navMenuShow:
      "navbar-collapse justify-content-end collapse show-menu navbarNav",
    navMenuHide: "navbar-collapse justify-content-end navbarNav",
  },
};

const Navbar = (props) => {
  const [navScroll, setNavScroll] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 20) {
      setNavScroll(true);
    } else {
      setNavScroll(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, [navScroll]);

  const toggleLinks = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className={navScroll ? "fixed" : ""}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand" to="" onClick={toggleHome}>
            {navScroll ? (
              <img src={FleetaWhite} alt="LMiTS" className="img-fluid" />
            ) : (
              <img src={FleetaDark} alt="LMiTS" className="img-fluid" />
            )}
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
            {props.children}
          </div>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
