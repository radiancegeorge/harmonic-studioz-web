import { NavLink } from "react-router-dom";
const GradientLink = ({ children }) => {
  return (
    <div className="link__reach">
      <div className="extra__bg"></div>
      <NavLink className="gradient__text" to="/contact">
        {children}
      </NavLink>
    </div>
  );
};

export default GradientLink;
