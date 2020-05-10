import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Main from "./containers/Main";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Dashboard from "./containers/Dashboard";
import NotFound from "./containers/NotFound";
import Aeropress from "./containers/Aeropress";
import Chemex from "./containers/Chemex";
import Frenchpress from "./containers/Frenchpress";
import Brew from "./containers/Brew";
import History from "./containers/History";
import Tracker from "./containers/Tracker";

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
					<Route exact path="/aeropress">
						<Aeropress />
					</Route>
					<Route exact path="/chemex">
						<Chemex />
					</Route>
					<Route exact path="/frenchpress">
						<Frenchpress />
					</Route>
					<Route exact path="/brew">
						<Brew />
					</Route>
					<Route exact path="/history">
						<History />
					</Route>
					<Route exact path="/tracker">
						<Tracker />
					</Route>
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
