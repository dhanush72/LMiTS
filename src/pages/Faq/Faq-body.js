import React, { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const FaqBody = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="accordian mb-5">
      <div className="accordian__item">
        <div
          className="accordian-header"
          onClick={() => setShowInfo(!showInfo)}
        >
          {title}
          <span>
            {showInfo ? <AiOutlineMinusCircle /> : <AiOutlinePlusCircle />}
          </span>
        </div>
        {showInfo && (
          <div className="accordian-body">
            <div className="accordian-body__contents">
              <p>{info}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FaqBody;
