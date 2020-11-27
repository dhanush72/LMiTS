import React from "react";
import { Link } from "react-scroll";
import { home } from "./data";
import { Navbar } from "../components/Navbar/Navbar";

const Layout1 = (props) => {
  return (
    <>
      <Navbar>
        <ul className="navbar-nav">
          {home.map(({ id, title, path }) => {
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
      </Navbar>
      <div>{props.children}</div>
    </>
  );
};

export default Layout1;
