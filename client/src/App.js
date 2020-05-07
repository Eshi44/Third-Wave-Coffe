import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer";
import Main from "./containers/Main";
// import logo from './logo.svg';
// import './App.css';
// import axios from "axios";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
