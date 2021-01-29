import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Link } from "react-scroll";
import { useState } from "react";
import { useEffect } from "react";

const ScrollToToContainer = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  width: 50px;
  height: 50px;
  font-size: 20px;
  text-align: center;
  background-color: #ffbd3b;
  color: #fff;
  border-radius: 50px;
  line-height: 50px;
  cursor: pointer;
  transition: all 0.5s;
`;

const ScrollToToIcon = styled(MdKeyboardArrowUp)`
  margin-bottom: 5px;
  font-size: 28px;

  &:hover {
    color: #fff;
    background-color: #ffbd3b;
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
