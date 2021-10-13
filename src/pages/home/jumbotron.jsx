import { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

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
            <div className="logo">
              <img src="img/my Brand 1.png" alt="" width="100%" />
            </div>
            <div className="everything__tech">
              <h1>
                <span className="gradient__text">eVERYTHING TECH</span>
                {mainHeader}
              </h1>
              <p>{mainText}</p>
              <div className="link__reach">
                <div className="extra__bg"></div>
                <NavLink className="gradient__text" to="/contact">
                  WORK WITH US
                </NavLink>
              </div>
              <ul className="socials">
                <li>
                  <a href="#facebook" target="__blank">
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a href="#instagram" target="__blank">
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a href="#linkdin" target="__blank">
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a href="#twitter" target="__blank">
                    <FaTwitter />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={`img__pc ${revealPcImage && "reveal__pc"}`}>
          <img src={pcImg} alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
