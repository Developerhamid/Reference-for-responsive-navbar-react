import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <h2>
            <span>M</span>obile
            <span>R</span>esponsive
          </h2>
        </div>
        <nav className={showMenu ? "navbar show-mobile-menu" : "navbar"}>
          <ul className="nav-list">
            <li>
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/bond">
                Bond
              </NavLink>
            </li>
          </ul>
        </nav>
        <div
          className={showMenu ? "mobile-menu remove-border" : "mobile-menu"}
          onClick={() => setShowMenu(!showMenu)}
        >
          <div className={showMenu ? "show-menu-btns" : "open-menu"}>
            <p className="menu-open-line"></p>
            <p className="menu-open-line"></p>
            <p className="menu-open-line"></p>
          </div>
          <div className={showMenu ? "close-menu " : "show-menu-btns"}>
            <p className="close-menu-line"></p>
            <p className="close-menu-line"></p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
