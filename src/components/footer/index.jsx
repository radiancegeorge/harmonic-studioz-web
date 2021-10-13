import { FaArrowCircleUp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="main">
          <div className="contact__detail">
            <div className="number">
              <FaPhoneAlt /> <span>+234 706 524 0321</span>
            </div>
            <div className="email">
              <a href="mailto:harmonicstudios00@gmail.com">
                <FaEnvelope />
                <span>harmonicstudios00@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="back__to__top" onClick={(e) => window.scrollTo(0, 0)}>
            <FaArrowCircleUp />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
