import React, { useEffect, useRef } from "react";
import Image1 from "../../assets/Cinematography/Snapshots/Image 1.png";
import Image2 from "../../assets/Cinematography/Snapshots/Image 2.png";
import Image3 from "../../assets/Cinematography/Snapshots/Image 3.png";
import Image4 from "../../assets/Cinematography/Snapshots/Image 4.png";
import Image5 from "../../assets/Cinematography/Snapshots/Image 5.png";
import Image6 from "../../assets/Cinematography/Snapshots/Image 6.png";
import Image7 from "../../assets/Cinematography/Snapshots/Image 7.png";

function Snapshots() {
  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-snapshots home-reality">
        <div className="cinematography-snapshots-grid">
          <div className="cinematography-snapshots-set">
            <img src={Image1} alt="Snapshots Image" />
          </div>
          <div className="cinematography-snapshots-set">
            <p>Some</p>
          </div>
          <div className="cinematography-snapshots-set">
            <img src={Image2} alt="Snapshots Image" />
          </div>
          <div className="cinematography-snapshots-set">
            <img src={Image3} alt="Snapshots Image" />
          </div>
          <div className="cinematography-snapshots-set">
            <p>Snap</p>
          </div>
          <div className="cinematography-snapshots-set">
            <img src={Image4} alt="Snapshots Image" />
          </div>
          <div className="cinematography-snapshots-set">
            <img src={Image5} alt="Snapshots Image" />
          </div>
          <div className="cinematography-snapshots-set">
            <p>Shots</p>
          </div>
          <div className="cinematography-snapshots-set">
            <img src={Image6} alt="Snapshots Image" />
          </div>
          <div className="cinematography-snapshots-set">
            <p>You’d</p>
          </div>
          <div className="cinematography-snapshots-set">
            <p>Love</p>
          </div>
          <div className="cinematography-snapshots-set">
            <img src={Image7} alt="Snapshots Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Snapshots;
