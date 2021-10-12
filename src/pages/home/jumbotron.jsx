import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <div className="section__01">
          <div className="block__01">
            <div className="logo">
              <img src="img/my Brand 1.png" alt="" width="100%" />
            </div>
            <div className="everything__tech">
              <h1>
                <span className="gradient__text">eVERYTHING TECH</span>
                Harmonic <br />
                Studioz
              </h1>
              <p>
                The most trustworthy plug for Graphics Design, Motion graphics,
                Branding, Website Development & Maintenance, Software
                Development & Maintenance, Social Media Management, Contents
                Creation and Strategy, Printing and Packaging and lots more.
              </p>
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
        <div className="img__pc">
          <img src="img/pc.png" alt="" width="100%" />
        </div>
      </div>
    </div>
  );
};
export default Jumbotron;
