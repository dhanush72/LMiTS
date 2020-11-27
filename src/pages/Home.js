import React from "react";
import {
  Navbar,
  Banner,
  Service,
  About,
  Features,
  Contact,
  Footer,
} from "../components";
import ScrollToTop from "../components/ScrollToTop";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <About />
      <Features />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Home;
