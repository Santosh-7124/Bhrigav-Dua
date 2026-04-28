import React from "react";
import Banner from "./Producer/Banner";
import Marquee from "./Producer/Marquee";
import Search from "./Cinematography/Search";
import Brands from "./Producer/Brands";
import Work from "./Producer/Work";
import Holi from "./Producer/Holi";
import Diwali from "./Producer/Diwali";
import Art from "./Producer/Art";
import Navbar from "./Producer/Navbar";
import Footer from "./Producer/Footer";
import Contact from "./Home/Contact";
import Testimony from "./Cinematography/Testimony";

function Producer() {
  return (
    <>
      <Navbar />
      <Banner />
      <Marquee />
      <Search />
      <Brands />
      <Work />
      <Holi />
      <Diwali />
      <Art />
      <Testimony />
      <Contact />
      <Footer />
    </>
  );
}

export default Producer;
