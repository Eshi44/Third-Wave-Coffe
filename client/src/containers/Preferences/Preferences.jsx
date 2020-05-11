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
						<div className="card-body">This is some text within a card body.</div>
					</div>
				</div>
			</>
		);
	}
}
export default Chemex;
