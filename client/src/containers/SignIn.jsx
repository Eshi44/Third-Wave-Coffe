import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";
import axios from "axios";
import Input from "../components/Shared/Input";

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
			error: ""
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
		const bckcolor = {
			backgroundColor: "#fff0d9",
			height: 500,
		};
		return (
			<>
				<NavBar />
				<div className="container-fluid" style={bckcolor}>
					<div className="row">
						<div className="col-3"></div>
						<div className="col-6">
							<h1>Sign-In</h1>
						</div>

						<div className="col-3"></div>
					</div>

					{this.state.error && (
						<div className="row justify-content-center">
							<div className="alert alert-danger" role="alert">
							{this.state.error}
							</div>
						</div>
					)}
				</div>
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4">
					
						<form onSubmit={this.handleSubmit}>
							<h2>Login</h2>
							<Input 
							id="username"
							type="username"
							name="username"
							label="Username"
							value={this.state.ussername}
							handleChange={this.handleInputChange}

							/>

								<Input 
							id="password"
							type="password"
							name="password"
							label="Password"
							value={this.state.password}
							handleChange={this.handleInputChange}

							/>

							<button type="submit" id="login" className="btn btn-primary">
								Login
							</button>
						</form>
					</div>
					<div className="col-4"></div>
				</div>
			</>
		);
	}
}
export default SignIn;
