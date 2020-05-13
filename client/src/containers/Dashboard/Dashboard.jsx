import React, { Component } from "react";
import NavBar from "../../components/Shared/NavBar/NavBar";
import Chemex from "../../images/chemex.png";
import Aeropress from "../../images/aeropress.png";
import Frenchpress from "../../images/frenchpress.png";
import History from "../../images/history.png";
import Tracker from "../../images/tracker.png";
import "./Dashboard.css";
import { Link } from "react-router-dom";

class Dashboard extends Component {

//get axios call to retrieve username and display in navbar
//need get route in authcontroller
//find by id in url and get username

	render() {
		return (
			<>
				<NavBar 
				    //    isLoggedIn={isLoggedIn}
					//    logOutUser={logOutUser}
					//    userObject={userObject}
				/>
				<div className="container-fluid">
					<div className="row">
						<div className="col col-sm-4 col-md-4 col-lg-4" id="tracker">
							<Link to="/tracker">
								<img className="img-responsive" id="hover" src={Tracker} alt="Tracker" />
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
						<div className="col col-sm-4 col-md-4 col-lg-4" id="history">
							<Link to="/history">
								<img className="img-responsive" id="hover" src={History} alt="History" />
							</Link>{" "}
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row " id="coffee-rows">
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link to="/preferences?aeropress" style={{ textDecorationColor: "#e4bc7e" }}>
								<img
									className="img-responsive"
									src={Aeropress}
									alt="Aeropress"
								/>
								<h2 id="coffeeMethodTitle">Aeropress</h2>
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link to="/preferences?chemex" style={{ textDecorationColor: "#e4bc7e" }}>
								<img className="img-responsive" 
								src={Chemex} 
								alt="Chemex" />
								<h2 id="coffeeMethodTitle">Chemex</h2>
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link to="/preferences?frenchpress" style={{ textDecorationColor: "#e4bc7e" }}>
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
