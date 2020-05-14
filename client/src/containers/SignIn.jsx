import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar/NavBar";
import axios from "axios";
import Form from "../components/Shared/Form/Form";
import "../components/Shared/Form/Form.css";
import jwt from "jsonwebtoken";

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

	handleSubmit = (event, username, password) => {
		console.log(username);
		console.log(password);
		event.preventDefault();

		axios
			.post("/api/user/login", {
				username,
				password,	
			})
			.then(async (response) => {
				console.log("Here is the response data");
				console.log(response);
				console.log("this is the token"+ response.data);
	
				await this.props.history.push(`/dashboard/${username}`);
				
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
				<NavBar 
				  
					/>
				<Form  handleSubmit={this.handleSubmit} error={this.state.error}/>
			</>
		);
	}
}
export default SignIn;
