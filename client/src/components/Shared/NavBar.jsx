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
        <button type="button" id="login-btn" className="btn btn-primary">Login</button>
        <button type="button" id="signup-btn" className="btn btn-primary">Signup</button>
      </nav>
    );
  };
  
  export default NavBar;