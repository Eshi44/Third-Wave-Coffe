import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Main from "./containers/Main";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Dashboard from "./containers/Dashboard"

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route exact path="/signin">
						<SignIn />
					</Route>
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route exact path="/dashboard">
						<Dashboard />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
