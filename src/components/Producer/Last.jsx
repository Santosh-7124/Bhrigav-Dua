import React, { useEffect, useRef } from "react";
import Testimony from "../Cinematography/Testimony";

function Last() {
  const testimonyRef = useRef(null);

  useEffect(() => {
    const section = testimonyRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.style.backgroundColor = "#F4F0E9";
        }
      },
      {
        threshold: 0,
      },
    );

    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className="cinematography-last" ref={testimonyRef}>
      <Testimony />
    </section>
  );
}

export default Last;
