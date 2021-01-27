import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
      
        <ul>
              <Link className="link-tom" to="/">T O<br/>M</Link>
              <Link className="link" to="/projects">Projects</Link>
              <Link className="link" to="/about">About</Link>
              <Link className="link" to="/">Home</Link>
              
       
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
