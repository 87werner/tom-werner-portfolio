import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <ul className="ul-list">
          <div className="li-container">
          <li className="li-list">
              <Link className="link tom-link">TOM</Link>
            </li>
            <li className="li-list">
              <Link className="link">Home</Link>
            </li>
            <li className="li-list">
              <Link className="link">About</Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
