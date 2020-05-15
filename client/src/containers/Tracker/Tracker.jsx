import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./Tracker.css";

class Tracker extends Component {
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
			<div>
                 <Header name={this.state.name} />
			</div>
		);
	}
}
export default Tracker;