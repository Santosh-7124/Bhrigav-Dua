import React from "react";
import { Link } from "react-router-dom";
import Background from "../../assets/Home/Banner/Background.png";
import Image1 from "../../assets/Home/Banner/Image 1.png";
import Image2 from "../../assets/Home/Banner/Image 2.png";

function Banner() {
  return (
    <section className="home-banner">
      <div className="home-banner-content">
        <img src={Background} alt="Banner Background" />
        <div className="home-banner-text">
          <h1>
            The Founder <br />
            <span>Bhrigav Dua.</span>
          </h1>
          <p>
            Explore the cinematic vision and production leadership shaping
            stories across industries, frames, and audiences.
          </p>
        </div>
        <Link to="/" className="primary-button">
          <p>Let’s Talk</p>
        </Link>
      </div>
      <div className="home-banner-cards">
        <Link to="/cinematography" className="home-banner-card">
          <div className="home-banner-card-content">
            <p>Cinematography</p>
            <h2>
              Through the <br />
              Lens
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <mask
                id="mask0_644_7084"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="44"
                height="44"
              >
                <rect width="44" height="44" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_644_7084)">
                <path
                  d="M29.2448 17.344L12.9407 32.4595L11.0711 30.4428L27.3752 15.3274L12.6169 14.769L12.7411 12.0196L32.1726 12.7547L31.4375 32.1863L28.6865 32.1023L29.2448 17.344Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <div className="home-banner-card-img">
            <img src={Image1} alt="Cinematography" />
          </div>
        </Link>
        <Link to="/producer" className="home-banner-card">
          <div className="home-banner-card-content">
            <p>Producer</p>
            <h2>
              Stories into <br />
              Reality
            </h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
            >
              <mask
                id="mask0_644_7084"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="44"
                height="44"
              >
                <rect width="44" height="44" fill="#D9D9D9" />
              </mask>
              <g mask="url(#mask0_644_7084)">
                <path
                  d="M29.2448 17.344L12.9407 32.4595L11.0711 30.4428L27.3752 15.3274L12.6169 14.769L12.7411 12.0196L32.1726 12.7547L31.4375 32.1863L28.6865 32.1023L29.2448 17.344Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
          <div className="home-banner-card-img">
            <img src={Image2} alt="Producer" />
          </div>
        </Link>
      </div>
      <a href="#" className="home-go-back">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <mask
            id="mask0_733_3077"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="24"
          >
            <rect width="24" height="24" fill="#D9D9D9" />
          </mask>
          <g mask="url(#mask0_733_3077)">
            <path
              d="M7.825 13L13.425 18.6L12 20L4 12L12 4L13.425 5.4L7.825 11H20V13H7.825Z"
              fill="white"
            />
          </g>
        </svg>
        <p className="desktop">Go Back</p>
      </a>
    </section>
  );
}

export default Banner;
