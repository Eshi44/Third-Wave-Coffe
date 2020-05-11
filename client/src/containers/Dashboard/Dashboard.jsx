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
	render() {
		return (
			<>
				<NavBar />
				<div className="container-fluid">
					<div className="row">
						<div className="col col-sm-4 col-md-4 col-lg-4" id="tracker">
							<Link to="/tracker">
								<img className="img-responsive" src={Tracker} alt="Tracker" />
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
						<div className="col col-sm-4 col-md-4 col-lg-4" id="history">
							<Link to="/history">
								<img className="img-responsive" src={History} alt="History" />
							</Link>{" "}
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row " id="coffee-rows">
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link to="/preferences?aeropress">
								<img
									className="img-responsive"
									src={Aeropress}
									alt="Aeropress"
								/>
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link to="/preferences?chemex">
								<img className="img-responsive" src={Chemex} alt="Chemex" />
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
							<Link to="/preferences?frenchpress">
								<img
									className="img-responsive"
									src={Frenchpress}
									alt="Frenchpress"
								/>
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Dashboard;
