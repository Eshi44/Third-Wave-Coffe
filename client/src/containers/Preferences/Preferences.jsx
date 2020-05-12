import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./Preferences.css";

class Chemex extends Component {
	constructor() {
		super();
		var queryString = window.location.search;
		var method = queryString.split("?")[1];
		// console.log(method);
		this.state = {
			name: method,
		};
	}
	render() {
		return (
			<>
				<div>
					<Header name={this.state.name} />
				</div>
				<div className="container" id="cardCalculation">
					<div className="card" id="card-body">
						<div className="card-body">
							<h3 id="desiredText">Desired Quantity:</h3>
							<div className="row">
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center" >Small</div>
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">Medium</div>
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">Large</div>
							</div>
							<h3 id="desiredText">Desired Strength:</h3>
							<div className="row">
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center" >Weak</div>
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">Medium</div>
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">Stong</div>
							</div>
							<h3 id="desiredText">Desired Bean Roast:</h3>
							<div className="row">
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center" >Light</div>
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">Medium</div>
							<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">Dark</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Chemex;
