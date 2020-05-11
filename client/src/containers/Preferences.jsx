import React, { Component } from "react";
import Header from "../components/Shared/Header/Header";


class Chemex extends Component {
	constructor() {
		super();
		var queryString = window.location.search;
		var method = queryString.split('?')[1];

		// console.log(method);
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
export default Chemex;
