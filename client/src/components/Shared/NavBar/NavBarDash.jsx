import React from "react";
import "./NavBar.css";
import Logo from "../../../images/coffee-mug-with-steam.png";
import { Link } from "react-router-dom";

const NavBar = (props) => {

	function clearStorage() {
		localStorage.clear();
	}



	return (
		<nav>
			<div className="nav-wrapper">
				<Link to="/dashboard/" className="brand-logo">
					<img className="img-responsive" src={Logo} alt="Coffee Cup Logo" />
				</Link>
			</div>
			<Link to="/">
				<button
					type="button"
					id="logout-btn"
					className="btn btn-primary"
					onClick={clearStorage}
				>
					{" "}
					Sign Out
				</button>
			</Link>

		<h2 id="welcome">Welcome, {window.localStorage.username} </h2>

		</nav>
	);
};

export default NavBar;
