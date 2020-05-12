import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar/NavBar";
import axios from "axios";
import Form from "../components/Shared/Form/Form";
import "../components/Shared/Form/Form.css";

class SignIn extends Component {
	state = {
		//controlled input
		username: "",
		password: "",
		//empty string is 'falsey'
		error: "",
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
			error: "",
		});
	};

	handleSubmit = (event) => {
		event.preventDefault();

		axios
			.post("/api/users", {
				username: this.state.username,
				password: this.state.password,
			})
			.then((response) => {
				console.log(response);
				this.props.history.push(`/dashboard/${response.data.data._id}`);
			})
			.catch((err) => {
				console.log(err);
				console.log(err.response.data.message);
				this.setState({ error: err.response.data.message });
			});
	};

	render() {
		return (
			<>
				<NavBar />
				<Form  handleSubmit={this.handleSubmit} error={this.state.error}/>
			</>
		);
	}
}
export default SignIn;
