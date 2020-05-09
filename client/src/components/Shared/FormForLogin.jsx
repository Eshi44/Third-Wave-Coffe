import React, { Component } from "react";
import "./Form.css"
class FormForLogin extends Component {
	render() { 
        return(
        		<>
			<form>
                <h2>Login</h2>
				<div className="form-group">
					<label id="userAndPassword" >Username</label>
					<input
						type="email"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter username"
					/>
				</div>
				<div className="form-group">
					<label id="userAndPassword" >Password</label>
					<input
						type="password"
						className="form-control"
						id="exampleInputPassword1"
						placeholder="Enter password"
					/>
				</div>

				<button type="submit" id="login" className="btn btn-primary">
					Login
				</button>
			</form>
		</>
    );
    }
}

export default FormForLogin;
