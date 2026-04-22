import React from "react";
import Image1 from "../../assets/Cinematography/Bhrigav/Image 1.png";

function Bhrigav() {
  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-bhrigav home-reality">
        <div className="cinematography-bhrigav-container">
          <img src={Image1} className="cinematography-bhrigav-img" />
          <img src={Image1} className="cinematography-bhrigav-img" />
          <h2>Bhrigav Dua</h2>
        </div>
      </div>
    </section>
  );
}

export default Bhrigav;
