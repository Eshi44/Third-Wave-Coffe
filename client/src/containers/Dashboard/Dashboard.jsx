import React, { Component } from "react";
import NavBar from "../../components/Shared/NavBar/NavBarDash";
import Chemex from "../../images/chemex.png";
import Aeropress from "../../images/aeropress.png";
import Frenchpress from "../../images/frenchpress.png";
import History from "../../images/history.png";
import Tracker from "../../images/tracker.png";
import "./Dashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends Component {
	componentDidMount(username) {
		//redirect if no token
		if (localStorage.length == 0) {
			window.history.pushState(
				`http://localhost:3000/dashboard/${url}`,
				"url",
				"/403"
			);
			window.location.reload(true);
		} else if (localStorage.length == 0) {
			window.history.pushState(
				`https://third-wave-coffee-app.herokuapp.com/dashboard/${url}`,
				"url",
				"/403"
			);
			window.location.reload(true);
		}

		localStorage.getItem("username", username);
		console.log("username");
		console.log(window.localStorage.username);
		var url = window.localStorage.username;

		if (window.location.href === "http://localhost:3000/dashboard/") {
			window.history.pushState(
				"http://localhost:3000/dashboard/",
				"url",
				`/${url}`
			);
		} else if (
			window.location.href ===
			"https://third-wave-coffee-app.herokuapp.com/dashboard/"
		) {
			window.history.pushState(
				"https://third-wave-coffee-app.herokuapp.com/dashboard/",
				"url",
				`/${url}`
			);
		}
	}

	render() {
		return (
			<>
				<NavBar />
				<div className="container-fluid">
					<div className="row">
						<div className="col col-sm-4 col-md-4 col-lg-4" id="tracker">
							<Link to="/tracker">
								<img
									className="img-responsive"
									id="hover"
									src={Tracker}
									alt="Tracker"
								/>
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
						<div className="col col-sm-4 col-md-4 col-lg-4" id="history">
							<Link to="/history">
								<img
									className="img-responsive"
									id="hover"
									src={History}
									alt="History"
								/>
							</Link>{" "}
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row " id="coffee-rows">
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link
								to="/preferences?Aeropress"
								style={{ textDecorationColor: "#e4bc7e" }}
							>
								<img
									className="img-responsive"
									src={Aeropress}
									alt="Aeropress"
								/>
								<h2 id="coffeeMethodTitle">Aeropress</h2>
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link
								to="/preferences?Chemex"
								style={{ textDecorationColor: "#e4bc7e" }}
							>
								<img className="img-responsive" src={Chemex} alt="Chemex" />
								<h2 id="coffeeMethodTitle">Chemex</h2>
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link
								to="/preferences?Frenchpress"
								style={{ textDecorationColor: "#e4bc7e" }}
							>
								<img
									className="img-responsive"
									src={Frenchpress}
									alt="Frenchpress"
								/>
								<h2 id="coffeeMethodTitle">Frenchpress</h2>
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Dashboard;
