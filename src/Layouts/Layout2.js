import React from "react";
import { Link } from "react-router-dom";
import { others } from "./data";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

const Layout2 = (props) => {
  return (
    <>
      <Navbar>
        <ul className="navbar-nav">
          {others.map(({ id, title, path }) => {
            return (
              <li key={id} className="nav-item">
                <Link to={path} className="nav-link">
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </Navbar>
      <div>{props.children}</div>

      <Footer />
    </>
  );
};

export default Layout2;
