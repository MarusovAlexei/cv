import "./Header.scss";

import { NavLink } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const buttonName = {
    first: "Home",
    second: "About",
    third: "Resume",
    fourth: "Portfolio",
    fifth: "Сall me",
  };
  const [activeState, setActiveState] = useState(false);

  const activeLink = "header-navigation__btn btn active-link";
  const normalLink = "header-navigation__btn btn";

  return (
    <header>
      <div className="burger-menu" onClick={() => setActiveState(!activeState)}>
        <span
          className={`burger-line ${activeState ? "burger-line__open" : ""}`}
        ></span>
      </div>
      <div className={`header-navigation ${activeState ? "active" : ""}`}>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to={"/"}
        >
          {buttonName.first}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to={"/about"}
        >
          {buttonName.second}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to={"/resume"}
        >
          {buttonName.third}
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to={"/portfolio"}
        >
          {buttonName.fourth}
        </NavLink>
      </div>
      <div className="header-contacts">
        <NavLink
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
          to={"tel:+375333939186"}
        >
          {buttonName.fifth}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
