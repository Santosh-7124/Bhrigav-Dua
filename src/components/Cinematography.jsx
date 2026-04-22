import React from "react";
import Banner from "./Cinematography/Banner";
import Marquee from "./Cinematography/Marquee";
import Search from "./Cinematography/Search";
import Visual from "./Cinematography/Visual";
import Work from "./Cinematography/Work";
import Lens from "./Cinematography/Lens";
import Industries from "./Cinematography/Industries";
import Khamosh from "./Cinematography/Khamosh";
import Holi from "./Producer/Holi";
import Diwali from "./Producer/Diwali";
import Bhrigav from "./Cinematography/Bhrigav";
import Snapshots from "./Cinematography/Snapshots";
import Testimony from "./Cinematography/Testimony";
import Contact from "./Home/Contact";
import Footer from "./Cinematography/Footer";
import Last from "./Cinematography/Last";
import Navbar from "./Cinematography/Navbar";

function Cinematography() {
  return (
    <>
      <Navbar />
      <Banner />
      <Marquee />
      <Search />
      <Visual />
      <Work />
      <Khamosh />
      <Lens />
      <Industries />
      <Holi />
      <Diwali />
      <Bhrigav />
      <Last />
      <Contact />
      <Footer />
    </>
  );
}

export default Cinematography;
