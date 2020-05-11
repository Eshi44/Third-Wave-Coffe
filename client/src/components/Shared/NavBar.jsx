import React from "react";
import "./NavBar.css";
import Logo from "../../images/coffee-mug-with-steam.png";
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/" className="brand-logo">
					<img className="img-responsive" src={Logo} alt="Coffee Cup Logo" />
				</Link>
			</div>
			<Link to="/signin">
				<button type="button" id="login-btn" className="btn btn-primary">
					Login
				</button>
			</Link>
			<Link to="/signup">
				<button type="button" id="signup-btn" className="btn btn-primary">
					Signup
				</button>
			</Link>
		</nav>
	);
};

export default NavBar;
