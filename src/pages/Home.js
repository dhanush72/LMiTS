import React from "react";
import {
  Banner,
  Service,
  About,
  Features,
  Contact,
  Footer,
} from "../components";
import ScrollToTop from "../components/ScrollToTop";
import Layout1 from "../Layouts/Layout1";

const Home = () => {
  return (
    <Layout1>
      <Banner />
      <Service />
      <About />
      <Features />
      {/* <Counter /> */}
      <Contact />
      <Footer />
      <ScrollToTop />
    </Layout1>
  );
};

export default Home;
