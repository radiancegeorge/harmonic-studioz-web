import { NavLink } from "react-router-dom";
import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">hOME</NavLink>
            </li>
            <li>
              <NavLink to="/about">aBOUT US</NavLink>
            </li>
            <li>
              <NavLink to="/#contact">cONTACT US</NavLink>
            </li>
          </ul>
          <NavLink className="hire__us" to="/#contact">
            hIRE US
          </NavLink>
        </nav>
        <div className="half__circle"></div>
      </div>
    </header>
  );
};

export default Header;
