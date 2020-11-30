import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";

const ScrollToToContainer = styled.div`
  position: fixed;
  bottom: 12px;
  left: 90%;
  text-align: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #ffbd3b;
  color: #fff;
  z-index: 1;
`;

const ScrollToToIcon = styled(MdKeyboardArrowUp)`
  margin-bottom: 5px;
  font-size: 28px;

  &:hover {
    animation: scrollTop 0.5s alternate ease infinite;
  }

  @keyframes scrollTop {
    from {
      transform: translateY(2px);
    }
    to {
      transform: translateY(-1px);
    }
  }
`;

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const changeBackground = () => {
    if (window.scrollY > 600) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => window.removeEventListener("scroll", changeBackground);
  }, [visible]);

  return (
    visible && (
      <ScrollToToContainer>
        <Link to="home" smooth={true} duration={500} spy={true} offset={-80}>
          <ScrollToToIcon />
        </Link>
      </ScrollToToContainer>
    )
  );
};

export default ScrollToTop;
