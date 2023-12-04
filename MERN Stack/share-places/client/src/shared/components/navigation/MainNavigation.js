import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLink";

function MainNavigation(props) {
  return (
    <MainHeader>
      <button className="main-navigation__menu-btn">
        <span />
        <span />
        <span />
      </button>
      <h1 className="main-navigation__title">
        <Link to="/">YourPlaces</Link>
      </h1>
      <nav>
        <NavLinks />
      </nav>
    </MainHeader>
  );
}
export default MainNavigation;
