import React from "react";
import { counters } from "./data";

export const Counter = () => {
  return (
    <section className="pb-0">
      <div className="container ">
        <div className="row">
          {counters.map(({ title, number }, index) => (
            <div className="col-md-4" key={index}>
              <div className="lmits-bg">
                <div className="lmits">
                  <div className="lmits-content">
                    <h3>{number}</h3>
                    <p>{title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
