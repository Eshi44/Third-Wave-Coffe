import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Shared/Footer/Footer";
import Main from "./containers/Main/Main";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./containers/NotFound/NotFound";
import Preferences from "./containers/Preferences/Preferences";
import Brew from "./containers/Brew/Brew";
import History from "./containers/History/History";
import Tracker from "./containers/Tracker/Tracker";
import jwt from "jsonwebtoken";

function App(props) {

	const [userObject, setUserObject] = useState({});
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		checkForToken();
	  }, []);
	
	  const checkForToken = async () => {
		const tokenFromStorage = await sessionStorage.getItem("jwt");
		if (tokenFromStorage) {
		  setIsLoggedIn(true);
		  try {
			const decoded = await jwt.verify(
			  tokenFromStorage,
			  process.env.REACT_APP_SECRET_KEY
			);
			if (decoded && decoded.username && decoded.id) {
			  setUserObject(decoded);
			  setIsLoggedIn(true);
			}
		  } catch (e) {
			setUserObject({});
			setIsLoggedIn(false);
			sessionStorage.setItem("jwt", "");
			console.error(e);
		  }
		}
	  };
	
	  const logOutUser = () => {
		setUserObject({});
		setIsLoggedIn(false);
		sessionStorage.setItem("jwt", "");
	  };
	

	return (
		<>
			<Router>
				<Switch>
					<Route exact path="/">
						<Main 
						       isLoggedIn={isLoggedIn}
							   logOutUser={logOutUser}
							   userObject={userObject}/>
					</Route>
					<Route path="/signin" render={(props) => (
              <SignIn {...props} checkForToken={checkForToken} />
            )}
          />
					<Route path="/signup"render={(props) => (
              <SignUp {...props} checkForToken={checkForToken} />
            )}
          />
					<Route
						path="/dashboard/:id"
						component={(props) => <Dashboard {...props} />}
					/>
					<Route path="/preferences"component={(props) => <Preferences {...props} />}
					/>
					<Route path="/brew"component={(props) => <Brew {...props} />}
					/>
					<Route path="/history"component={(props) => <History {...props} />}
					/>
					<Route path="/tracker"component={(props) => <Tracker {...props} />}
					/>
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
