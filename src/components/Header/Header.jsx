import { useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./header.scss";
const Header = ({ setLocation }) => {
  const location = useLocation();

  useEffect(() => {
    setLocation(location);
  }, [location]);
  return (
    <header
      className="header"
      style={{
        ...(location.pathname === "/contact" && {
          backgroundColor: "transparent",
        }),
      }}>
      <div className="container">
        <div className="header__logo">
          <img src="img/H logo 3d.png" alt="" width="100%" />
        </div>
        <nav
          style={{
            ...(location.pathname === "/contact" && {
              backgroundColor: "transparent",
            }),
          }}>
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
          {location.pathname !== "/contact" && (
            <NavLink className="hire__us" to="/contact">
              hIRE US
            </NavLink>
          )}
        </nav>
        {location.pathname !== "/contact" && (
          <div className="half__circle"></div>
        )}
      </div>
    </header>
  );
};

export default Header;
