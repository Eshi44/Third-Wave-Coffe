import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./Preferences.css";
import SmallCup from "../../images/small-cup.png";
import MedCup from "../../images/medium-cup.png";
import LargeCup from "../../images/large-cup.png";

class Chemex extends Component {
	constructor() {
		super();
		var queryString = window.location.search;
		var method = queryString.split("?")[1];
		// console.log(method);
		this.state = {
			name: method,
		};
	}
	render() {
		return (
			<>
				<div>
					<Header name={this.state.name} />
				</div>
				<div className="container" id="cardCalculation">
					<div className="card" id="card-body">
						<div className="card-body">
							<h3 id="desiredTextFirst">Desired Quantity:</h3>
							<div className="row">
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<input
										id="inputOne"
										type="image"
										className="img-responsive"
										src={SmallCup}
										alt="Small Cup"
									/>
									
									<p id="textsml">Small</p>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<input
										id="inputTwo"
										type="image"
										className="img-responsive"
										src={MedCup}
										alt="Medium Cup"
									/>
									<p id="textsml">Medium</p>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<input
										id="inputThree"
										type="image"
										className="img-responsive"
										src={LargeCup}
										alt="Large Cup"
									/>
									<p id="textsml">Large</p>
								</div>
							</div>
							<h3 id="desiredText">Desired Strength:</h3>
							<div className="row">
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
								<input type="radio" id="weak"  name="coffee" value="weak"/>
								<label id="textwms" for="weak">Weak </label>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
								<input type="radio" id="med" name="coffee" value="med"/>
									<label id="textwms" for="med">Medium </label>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
								<input type="radio" id="strong" name="coffee" value="strong"/>
								<label id="textwms" for="strong">Strong</label>
								</div>
							</div>
							<h3 id="desiredText">Desired Bean Roast:</h3>
							<div className="row">
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									Light
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									Medium
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									Dark
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Chemex;
