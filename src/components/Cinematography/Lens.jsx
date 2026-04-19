import React, { useRef, useState, useEffect } from "react";
import Image1 from "../../assets/Cinematography/Lens/Image 1.png";
import Image2 from "../../assets/Cinematography/Lens/Image 2.png";
import Image3 from "../../assets/Cinematography/Lens/Image 3.png";
import Image4 from "../../assets/Cinematography/Lens/Image 4.png";

function Lens() {
  const testimonyRef = useRef(null);

  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#f4f0e9";
        } else {
          document.body.style.backgroundColor = "#fff";
        }
      },
      {
        threshold: 0.5,
      },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="home-reality-wrapper">
      <div className="cinematography-lens home-reality" ref={testimonyRef}>
        <div className="template-heading">
          <h3 className="h3-semibold">
            Works Through the <br /> <span> Lens</span>
          </h3>
          <p className="m-regular">
            Lorem ipsum dolor sit amet consectetur. Maecenas at quis vestibulum
            diam hac consectetur eget.
          </p>
        </div>
        <div className="cinematography-lens-container">
          <article className="cinematography-lens-set">
            <div className="cinematography-lens-set-img">
              <img src={Image1} alt="Work Image" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
              ultricies risus. Metus nulla rutrum id proin in vulputate egestas
              phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
              suspendisse.
            </p>
          </article>
          <article className="cinematography-lens-set">
            <div className="cinematography-lens-set-img">
              <img src={Image2} alt="Work Image" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
              ultricies risus. Metus nulla rutrum id proin in vulputate egestas
              phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
              suspendisse.
            </p>
          </article>
          <article className="cinematography-lens-set">
            <div className="cinematography-lens-set-img">
              <img src={Image3} alt="Work Image" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
              ultricies risus. Metus nulla rutrum id proin in vulputate egestas
              phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
              suspendisse.
            </p>
          </article>
          <article className="cinematography-lens-set">
            <div className="cinematography-lens-set-img">
              <img src={Image4} alt="Work Image" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur. Donec integer erat nulla
              ultricies risus. Metus nulla rutrum id proin in vulputate egestas
              phasellus. Arcu quam et placerat tempus sollicitudin ac massa ac
              suspendisse.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Lens;
