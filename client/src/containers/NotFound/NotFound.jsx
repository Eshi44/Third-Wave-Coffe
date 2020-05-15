import React, { Component } from "react";
import "./NotFound.css";
import ErrorCup from "../../images/404-image.png";
import Steam from "../../images/steam.png";
import { Link } from "react-router-dom";

class NotFound extends Component {
	render() {
		return (
			<>
				<div className="container" id="errorContainer">
					<div className="row">
						<div className="col col-sm-4 col-md-2 col-lg-2"></div>
						<div className="col col-sm-4 col-md-6 col-lg-6">
							<h2 id="error">404 Error</h2>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
					</div>
					<div className="row">
						<div className="col col-sm-4 col-md-3 col-lg-3">
							<Link to="/">
								<button
									type="button"
									id="login-btn"
									className="btn btn-primary"
								>
									Home
								</button>
							</Link>
						</div>
						<div className="col col-sm-4 col-md-2 col-lg-2"></div>
						<div className="col col-sm-4 col-md-6 col-lg-6">
							<img
								className="img-responsive animate__animated animate__fadeOutUp animate__faster animate__infinite"
								id="steam"
								src={Steam}
								alt="Steam"
							/>
							<Link to="/">
								<img
									className="img-responsive"
									id="errorCup"
									src={ErrorCup}
									alt="ErrorCup"
								/>
							</Link>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default NotFound;
