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
			<a href="/signin">
				<button type="button" id="login-btn" className="btn btn-primary">
					Login
				</button>
			</a>
			<a href="/signup">
				<button type="button" id="signup-btn" className="btn btn-primary">
					Signup
				</button>
			</a>
		</nav>
	);
};

export default NavBar;
