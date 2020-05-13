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
			.post("/api/auth", {
				username,
				password,
				
			})
			.then(async (response) => {
				console.log("Here is the response data");
				if (response.data.success) {
				  const decoded = await jwt.verify(
					response.data.data,
					process.env.REACT_APP_SECRET
				  );
				  console.log(decoded);
				  await sessionStorage.setItem("jwt", response.data.data);
				  await this.props.checkForToken();
				  await this.props.history.push(`/dashboard/${decoded.id}`);
				}
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
				    //    isLoggedIn={isLoggedIn}
					//    logOutUser={logOutUser}
					//    userObject={userObject}
					/>
				<Form  handleSubmit={this.handleSubmit} error={this.state.error}/>
			</>
		);
	}
}
export default SignIn;
