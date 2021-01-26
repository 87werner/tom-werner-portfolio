import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
      
        <ul>
              <Link className="link-tom">T O<br/>M</Link>
              <Link className="link">Projects</Link>
              <Link className="link">About</Link>
              <Link className="link">Home</Link>
              
       
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
