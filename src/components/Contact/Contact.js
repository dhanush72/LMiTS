import React from "react";
import Line from "../../assets/images/line.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { FaUserAlt } from "react-icons/fa";
import { MdSubject } from "react-icons/md";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Button = styled.button`
  display: inline-block;
  background-color: #ffbd3b;
  padding: 12px 30px;
  color: #fff;
  border: none;
  outline: none;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 500;
  position: relative;
  z-index: 1;
  transition: all 0.5s;

  &::after {
    position: absolute;
    right: 0;
    top: 0;
    width: 0%;
    height: 100%;
    content: "";
    background-color: #362a50;
    z-index: -1;
    border-radius: 5px;
    -webkit-transition: 0.5s;
    -o-transition: 0.5s;
    transition: 0.5s;
  }

  &:hover:after {
    width: 100%;
    left: 0;
    right: auto;
  }

  &:hover {
    color: #fff;
    cursor: pointer;
  }
`;

const Contact = () => {
  const [alertSubmit, setAlertSubmit] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (alertSubmit) {
      ref.current.focus();
    }
  }, [alertSubmit]);

  const sendEmail = (e) => {
    e.preventDefault();
    setAlertSubmit(true);
    emailjs
      .sendForm(
        "gmail",
        "template_iyu4qli",
        e.target,
        "user_2ewtaC4WpwtPJYAIvG2vP"
      )
      .then(() => {
        const interval = setTimeout(() => {
          setAlertSubmit(false);
        }, 3000);

        return () => clearInterval(interval);
      })
      .catch(() => {
        setAlertSubmit(true);
      });
    e.target.reset();
    // alert("Email Sent");
  };
  return (
    <section className="contact-bg" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-sm-10 contact-border">
            <div className="heading head contact-head">
              <h2 className="mt-0">
                Have any queries? Please feel free to contact Us.
              </h2>
              <img src={Line} alt="Line" className="img-fluid" />
            </div>

            <div className="contact-us">
              <div className="media">
                <div className="contact-image">
                  <AiOutlineMail className="img-fluid" />
                </div>
                <div className="media-body contact-content">
                  <h5>Email Address</h5>
                  <h6>
                    <a href="mailto:support@fleeta.in">support@fleeta.in</a>
                  </h6>
                </div>
              </div>

              <div className="media">
                <div className="contact-image">
                  <BsPhone className="img-fluid" />
                </div>
                <div className="media-body contact-content">
                  <h5>Phone Number</h5>
                  <h6>
                    <a href="tel:918620087300">+91 86200 87300</a>
                  </h6>
                </div>
              </div>
            </div>
            <div className="media">
              <div className="contact-image">
                <GoLocation className="img-fluid" />
              </div>
              <div className="media-body contact-content">
                <h5>Our Location</h5>
                <h6>
                  <address>
                    R-22, 3rd Crosss, Nash Square, 1st Flr, Electronicity
                    Phase-1 <br /> Bengaluru, Karnataka - 560100, India
                  </address>
                </h6>
              </div>
            </div>
          </div>

          <div className="col-lg-6 col-sm-10">
            <div className="contact-form">
              <form onSubmit={sendEmail}>
                {alertSubmit && (
                  <div className="alert alert-success" ref={ref} tabIndex="-1">
                    <span>
                      your query submitted. our team will be in touch with you
                      shortly
                    </span>
                  </div>
                )}
                <div className="input-group contact-form-bg">
                  <FaUserAlt />
                  <input
                    type="text"
                    name="name"
                    required
                    className="form-control"
                    placeholder="Name"
                  />
                </div>

                <div className="input-group contact-form-bg">
                  <AiOutlineMail />
                  <input
                    type="email"
                    name="email"
                    required
                    className="form-control"
                    placeholder="Email"
                  />
                </div>

                <div className="input-group contact-form-bg">
                  <MdSubject />
                  <input
                    type="text"
                    name="subject"
                    required
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>

                <div className="input-group contact-form-bg text-area">
                  <textarea
                    name="message"
                    required
                    className="form-control"
                    placeholder="Write message here..."
                  ></textarea>
                </div>

                <Button className="btn">Send Message</Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact };
