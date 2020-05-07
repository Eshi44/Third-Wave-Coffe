import React from "react";
import "./NavBar.css";
import Logo from "../../images/coffee-mug-with-steam.png";

const NavBar = () => {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
          <img className="img-responsive" src={Logo} alt="Coffee Cup Logo" />
          </a>
        </div>
      </nav>
    );
  };
  
  export default NavBar;