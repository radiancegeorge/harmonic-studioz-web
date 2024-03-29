import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import GradientLink from "../../components/gradientLink";

const Jumbotron = ({ mainText, mainHeader, pcImg, customStyle }) => {
  const location = useLocation();
  const [revealPcImage, setRevealImage] = useState();

  useEffect(() => {
    console.log(location);
    setRevealImage(false);
    setTimeout(() => {
      setRevealImage(true);
    }, 500);
  }, [location]);
  return (
    <div className="jumbotron" style={{ ...customStyle }}>
      <div className="container">
        <div className="section__01">
          <div className="block__01">
            <div className="everything__tech">
              <h1>
                <div className="logo">
                  <img src="img/H logo w.png" alt="" width="100%" />
                </div>
                <span className="gradient__text">oNE STOP BRAND</span>
                {mainHeader}
              </h1>
              <div className={`img__pc ${revealPcImage && "reveal__pc"}`}>
                <img src={pcImg} alt="" width="100%" />
              </div>
              <p>{mainText}</p>
              <GradientLink>WORK WITH US</GradientLink>
              <ul className="socials">
                <li>
                  <a
                    href="https://facebook.com/HarmonicStudios-102337181393379/"
                    target="__blank">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/harmonic_studioz"
                    target="__blank">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/harmonicstudioz/"
                    target="__blank">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/HarmonicStudioz"
                    target="__blank">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
