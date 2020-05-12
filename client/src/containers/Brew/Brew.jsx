import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import History from "../../images/history.png";
import { Link } from "react-router-dom";

class Brew extends Component {
	constructor() {
		super();
		var queryString = window.location.pathname;
		var method = queryString.split("/");

		console.log(method);
		this.state = {
			name: method,
		};
	}
	render() {
		return (
			<>
				<Header name={this.state.name} />

				<div className="row">
					<div className="col col-sm-4 col-md-4 col-lg-4"></div>
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
			</>
		);
	}
}
export default Brew;
