import MainHeader from "./MainHeader";
import "./MainNavigation.css";
import { Link } from "react-router-dom";
import NavLinks from "./NavLink";
import SideDrawer from "./SideDrawer";
import { useState } from "react";
import Backdrop from "../UI/Backdrop";

function MainNavigation(props) {
  const [isOpen, setIsOpen] = useState(false);
  function closeDrawer() {
    setIsOpen(false);
  }
  return (
    <>
      {isOpen && (
        <SideDrawer>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
      )}
      {isOpen && <Backdrop onClick={closeDrawer} />}
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
          onClick={() => setIsOpen(true)}
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
      </MainHeader>
    </>
  );
}
export default MainNavigation;
