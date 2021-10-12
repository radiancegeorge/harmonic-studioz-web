import { NavLink } from "react-router-dom";
import "./index.scss";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Jumbotron from "./jumbotron";
const Home = () => {
  return (
    <div className="home">
      <Jumbotron />
    </div>
  );
};
export default Home;
