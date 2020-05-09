import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";
import FormForLogin from "../components/Shared/FormForLogin";

class SignIn extends Component {



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
				</div>
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4">
						<FormForLogin />
					</div>
					<div className="col-4"></div>
				</div>
			</>
		);
	}
}
export default SignIn;
