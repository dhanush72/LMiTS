import React from "react";
import { Link } from "react-scroll";
import { home } from "./data";
import { Navbar } from "../components/Navbar/Navbar";

const Layout1 = ({ children }) => {
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
          <li className="nav-item">
            <a
              href="http://13.235.63.108:3002/"
              className="nav-link"
              target="_blank"
              rel="noreferrer"
            >
              Bulk Orders
            </a>
          </li>

          {/* <li>
            <a href="http://bulk.lmits.in/" target="_blank" rel="noreferrer">
              <button className="btn btn-orange">Bulk Orders</button>
            </a>
          </li> */}
        </ul>
      </Navbar>
      <div>{children}</div>
    </>
  );
};

export default Layout1;
