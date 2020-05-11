import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import Main from "./containers/Main";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./containers/NotFound";
import Preferences from "./containers/Preferences/Preferences";
import Brew from "./containers/Brew/Brew";
import History from "./containers/History/History";
import Tracker from "./containers/Tracker/Tracker";

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
					<Route  path="/preferences">
						<Preferences />
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
