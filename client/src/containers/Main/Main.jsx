import React, { Component } from "react";
import NavBar from "../../components/Shared/NavBar/NavBar";
import "./Main.css";
import Chemex from "../../images/chemex-animated.png";
class Main extends Component {
	render() {
		return (
			<>
				<NavBar />
				<div id="homepage-cover">
					<div className="container">
						<div className="row">
							<div className="col-2"></div>
							<div className="col-8">
								<h1>Third Wave Coffee</h1>
							</div>
							<div className="col-2"></div>
						</div>
					</div>
					<div className="fluid-container">
						<div className="row">
							<div className="col col-sm-2 col-md-2 col-lg-2"></div>
							<div className="col col-sm-8 col-md-6 col-lg-6">
								<h4>What is Third Wave Coffee?</h4>
								<h5>
									In coffee world terms, Wave means "Movement". The Third Wave Coffee Movement took off in the 1990s and coffee drinkers became interested in the character of the coffee itself: where it's from, how it's created, who trades it, who roasts it, and how it's brewed.
									Hand drip coffees became popular, as well as high-quality beans (a.k.a specialty coffees), and light roasts are distinctive of the Third Wave. 
									Coffee drinks learn to pay more attention to and respect the style of coffee, rather than just
									seeing it as a caffeine fix.
								</h5>
							</div>
							<div className="col col-sm-2 col-md-4 col-lg-4"></div>
						</div>
					</div>

					<div className="container">
						<div className="row" id="coffee-row">
							<div className="col col-sm-1 col-md-2 col-lg-2"></div>
							<div className="col col-sm-3 col-md-6 col-lg-7"></div>
							<div className="col col-sm-4 col-md-4 col-lg-3">
								<img className="img-responsive" src={Chemex} alt="Chemex" />
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Main;
