import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.scss";
const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                className={
                  location.hash === ""
                    ? location.pathname === "/"
                      ? `active__link`
                      : ""
                    : ""
                }>
                hOME
              </Link>
            </li>
            <li>
              <NavLink
                to="/#about"
                className={location.hash === "#about" ? `active__link` : ""}>
                aBOUT US
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={
                  location.pathname === "/contact" ? `active__link` : ""
                }>
                cONTACT US
              </NavLink>
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
