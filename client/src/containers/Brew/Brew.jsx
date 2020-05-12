import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";


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
				
			</>
		);
	}
}
export default Brew;
