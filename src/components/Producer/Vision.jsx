import React, { useEffect, useState } from "react";
import Image1 from "../../assets/Producer/Vision/Image 1.jpg";
import Image2 from "../../assets/Producer/Vision/Image 2.jpg";
import Image3 from "../../assets/Producer/Vision/Image 3.jpg";
import Image4 from "../../assets/Producer/Vision/Image 1.jpg";
import Image5 from "../../assets/Producer/Vision/Image 2.jpg";
import Image6 from "../../assets/Producer/Vision/Image 3.jpg";
import Image7 from "../../assets/Producer/Vision/Image 3.jpg";
import Image8 from "../../assets/Producer/Vision/Image 1.jpg";
import Image9 from "../../assets/Producer/Vision/Image 2.jpg";

function Vision() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="home-reality-wrapper">
      <div className="producer-vision home-reality">
        <div className="producer-vision-container">
          <h2>
            VISION
            <br />
            PRECISION
            <br />
            PRODUCTION
          </h2>

          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className={`producer-vision-img ${
                index === activeIndex
                  ? "producer-vision-img-visible"
                  : "producer-vision-img-hidden"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Vision;
