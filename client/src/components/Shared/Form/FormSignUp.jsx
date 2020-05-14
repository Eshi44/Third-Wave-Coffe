import React, {useState} from 'react';
import Input from "../Input/Input";

const Form = ({handleSubmit, error}) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const bckcolor = {
        backgroundColor: "#fff0d9",
        height: 500,
    };

    return (
        <>
        <div className="container-fluid" style={bckcolor}>
					<div className="row">
						<div className="col-3"></div>
						<div className="col-6">
							<h1>Create Account</h1>
						</div>

						<div className="col-3"></div>
					</div>

					{error && (
						<div className="row justify-content-center">
							<div className="alert alert-danger" role="alert">
								{error}
							</div>
						</div>
					)}
				</div>
				<div className="row">
					<div className="col-4"></div>
					<div className="col-4">
						<form  onSubmit={(e) => {
            handleSubmit(e, username, password);
          }}>
							<h2>Sign-Up</h2>
							<Input
								id="username"
								type="username"
								name="username"
								label="Username"
								value={username}
								handleChange={e => setUsername(e.target.value)}
							/>

							<Input
								id="password"
								type="password"
								name="password"
								label="Password"
								value={password}
								handleChange={e => setPassword(e.target.value)}
							/>

							<button type="submit" id="login" className="btn btn-primary">
								Sign-Up
							</button>
						</form>
					</div>
					<div className="col-4"></div>
				</div>
                </>
    );
};


export default Form;