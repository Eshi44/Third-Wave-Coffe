import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
	return (
		<>
			<header id="header">
				<Link to="/dashboard/">
					<button type="button" id="dashboard" className="btn btn-primary">
						Dashboard
					</button>
				</Link>
				<p id="preferencesHeader">{props.name}</p>
			</header>
		</>
	);
};

export default Header;
