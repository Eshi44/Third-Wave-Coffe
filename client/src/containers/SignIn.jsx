import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar/NavBar";
import axios from "axios";
import Form from "../components/Shared/Form/FormSignIn";
import "../components/Shared/Form/Form.css";
// import jwt from "jsonwebtoken";

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
				console.log("this is the token " + response.data);
				//store token in local storage
				localStorage.setItem("jwtToken", response.data);
				await this.props.history.push(`/dashboard/${username}`);
				
			  })
			  .catch((err) => {
				console.log(err);
				console.log(err.response.data.message);
				this.setState({ error: "Invalid username or password" });
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
