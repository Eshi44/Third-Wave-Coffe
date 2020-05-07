import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";
import "./Main.css";
import Chemex from"../images/chemex-animated.png"
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
							<h5>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Quibusdam officiis quaerat unde magnam esse iusto reprehenderit
								impedit dolorem, similique dicta expeditas voluptatum veritatis
								ullam nulla quod cumque, beatae laboriosam modi! reeeeeeee
							</h5>
						</div>
						<div className="col col-sm-2 col-md-4 col-lg-4"></div>
					</div>
				</div>

				<div className="container">
					<div className="row" id="coffee-row">
						<div className="col col-sm-1 col-md-2 col-lg-2"></div>
						<div className="col col-sm-3 col-md-6 col-lg-7"></div>
						<div className="col col-sm-4 col-md-4 col-lg-3"><img className="img-responsive" src={Chemex} alt="Chemex" /></div>
					</div>
				</div>
                </div>
			</>
		);
	}
}
export default Main;
