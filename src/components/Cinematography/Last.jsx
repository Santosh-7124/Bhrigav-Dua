import React, { useEffect, useRef } from "react";
import Testimony from "./Testimony";
import Snapshots from "./Snapshots";

function Last() {
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
      <Snapshots />
      <Testimony />
    </section>
  );
}

export default Last;
