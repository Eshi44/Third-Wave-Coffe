import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";
// import FormForLogin from "../components/Shared/FormForLogin";
import axios from "axios";

class SignIn extends Component {
	state = {
		//controlled input
		username: "",
		password: "",
		error: false,
	};

	handleInputChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
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
				this.props.history.push("/dashboard");
			})
			.catch((err) => {
				console.log(err);
				this.setState({error:true});
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
							Incorrect username or password!
						</div>
					</div>
					)}


				</div>
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4">
						{/* <FormForLogin /> */}
						<form onSubmit={this.handleSubmit}>
							<h2>Login</h2>
							<div className="form-group">
								<label id="userAndPassword">Username</label>
								<input
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter username"
									name="username"
									value={this.state.username}
									onChange={this.handleInputChange}
								/>
							</div>
							<div className="form-group">
								<label id="userAndPassword">Password</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Enter password"
									name="password"
									value={this.state.password}
									onChange={this.handleInputChange}
								/>
							</div>

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
