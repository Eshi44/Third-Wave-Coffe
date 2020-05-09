import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Main from "./containers/Main";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Dashboard from "./containers/Dashboard";
import NotFound from "./containers/NotFound";

function App(props) {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route path="/signin" component={(props) => <SignIn {...props} />} />
					<Route exact path="/signup">
						<SignUp />
					</Route>
					<Route path="/dashboard/:id" component={(props) => <Dashboard {...props} />} />
					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
