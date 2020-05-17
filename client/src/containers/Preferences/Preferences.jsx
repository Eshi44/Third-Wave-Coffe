import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./Preferences.css";
import SmallCup from "../../images/small-cup.png";
import MedCup from "../../images/medium-cup.png";
import LargeCup from "../../images/large-cup.png";
import LightRoast from "../../images/light-roast.png";
import MedRoast from "../../images/medium-roast.png";
import DarkRoast from "../../images/dark-roast.png";
import StrongStrength from "../../images/strong-strength.png";
import MediumStrength from "../../images/medium-strength.png";
import WeakStrength from "../../images/weak-strength.png";
import axios from "axios";
import $ from "jquery";
import { Redirect } from "react-router";
import ReactTooltip from "react-tooltip";

class Chemex extends Component {
	state = {
		name: "",
		redirect: false,
	};

	setRedirect = () => {
		var method = $("#preferencesHeader").html();
		var strength = document.querySelectorAll("input[name=strength]:checked")[0];
		var size = document.querySelectorAll("input[name=size]:checked")[0];
		var roast = document.querySelectorAll("input[name=roast]:checked")[0];

		if (strength && size && roast)
			this.saveDrink(method, strength.value, size.value, roast.value);
		else {
			$("#brewErrorMessage")
				.append(`<div className="row d-flex justify-content-center">
		<div id="errorBox"className="alert alert-danger" role="alert">
		<p>Must select a quantity, strength, and roast!</p>
		</div>
	</div>`);
		}
	};

	renderRedirect = () => {
		if (this.state.redirect) {
			return (
				<Redirect
					to={{
						pathname: "/brew",
					}}
				/>
			);
		}
	};

	saveDrink(method, strength, size, roast) {
		const username = localStorage.getItem("username");
		axios
			.post(`/api/brew/${username}`, {
				method,
				size,
				strength,
				roast,
			})
			.then(async (response) => {
				console.log("SAVE SUCCESS - RESPONSE DATA BELOW");
				console.log(response);
				console.log(response.data.drinks[response.data.drinks.length - 1]);
				console.log(size);
				console.log(strength);
				console.log(roast);
				if (localStorage.getItem("drinkID") !== "")
					localStorage.removeItem("drinkID");
				localStorage.setItem(
					"drinkID",
					response.data.drinks[response.data.drinks.length - 1]
				);
				this.setState({
					redirect: true,
				});
			})
			.catch((err) => {
				console.log(err);
			});
	}

	componentDidMount() {
		var queryString = window.location.search;
		var brewMethod = queryString.split("?")[1];
		this.setState({ name: brewMethod });
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
									<label>
										<input
											type="radio"
											name="size"
											value="Small"
											className="img-responsive"
											alt="Small Cup"
											id="hideRadioBtn"
										/>
										<img id="inputOne" src={SmallCup} />
									</label>
									<p data-tip data-for="smallCup" id="textsml">Small</p>
									<ReactTooltip id="smallCup" type="dark">
										<span>
											120mL
								 </span>
									</ReactTooltip>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="size"
											value="Medium"
											className="img-responsive"
											alt="Medium Cup"
											id="hideRadioBtn"
										/>
										<img id="inputTwo" src={MedCup} />
									</label>
									<p data-tip data-for="medCup" id="textsml">Medium</p>
									<ReactTooltip id="medCup" type="dark">
										<span>
											150mL
								 </span>
									</ReactTooltip>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="size"
											value="Large"
											className="img-responsive"
											alt="Large Cup"
											id="hideRadioBtn"
										/>
										<img id="inputThree" src={LargeCup} />
									</label>
									<p data-tip data-for="largeCup" id="textsml">Large</p>
									<ReactTooltip id="largeCup" type="dark">
										<span>
											180mL
								 </span>
									</ReactTooltip>
								</div>
							</div>
							<h3 data-tip data-for="desiredStrength" id="desiredText">Desired Strength:</h3>
							<ReactTooltip id="desiredStrength" type="dark">
										<span>Coffee strength is determined by the ratio of coffee grinds to water during the brewing process, NOT during the roasting of the coffee. Strength is measured by how much dissolved coffee solids are in the post-brew water. Strength is the concentration of coffee in your mug.

								 </span>
									</ReactTooltip>
							<div className="row">
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											id="weak"
											name="strength"
											value="Weak"
											id="hideRadioBtn"
										/>
										<img id="inputThree" src={WeakStrength} />
									</label>
									<label id="textwms">Weak </label>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											id="med"
											name="strength"
											value="Medium"
											id="hideRadioBtn"
										/>
										<img id="inputThree" src={MediumStrength} />
									</label>
									<label id="textwms">Medium </label>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											id="strong"
											name="strength"
											value="Strong"
											id="hideRadioBtn"
										/>
										<img id="inputThree" src={StrongStrength} />
									</label>
									<label id="textwms">Strong</label>
								</div>
							</div>
							<h3 data-tip data-for="desiredRoast" id="desiredText">Desired Bean Roast:</h3>
							<ReactTooltip id="desiredRoast" type="dark">
										<span>Different roast levels affect the coffee by a huge amount in terms of flavour, body, weight or volume, caffeine yield and ease of grind.</span>
									</ReactTooltip>
							<div className="row">
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="roast"
											value="Light"
											className="img-responsive"
											alt="Light Roast"
											id="hideRadioBtn"
										/>
										<img id="roastInputOne" src={LightRoast} />
									</label>

									<a data-tip data-for="light" id="textlmd">
										Light
									</a>
									<ReactTooltip id="light" type="dark">
										<span>Light roast coffee is a light brown color and has no oil on the surface of the beans. These coffees typically have a crisp acidity, a mellow body, and bright flavors. Also, light roast coffee has more caffeine.</span>
									</ReactTooltip>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="roast"
											value="Medium"
											className="img-responsive"
											alt="Med Roast"
											id="hideRadioBtn"
										/>
										<img id="roastInputTwo" src={MedRoast} />
									</label>
									<a data-tip data-for="medium" id="textlmd">Medium</a>
									<ReactTooltip id="medium" type="dark">
										<span>Medium roasted coffees are medium brown in color with more body than light roasts. Like the lighter roasts, they have no oil on the bean surfaces. However, medium roasts lack the grainy taste of the light roasts, exhibiting more balanced flavor, aroma, and acidity.</span>
									</ReactTooltip>
								</div>
								<div className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center">
									<label>
										<input
											type="radio"
											name="roast"
											value="Dark"
											className="img-responsive"
											alt="Dark Roast"
											id="hideRadioBtn"
										/>
										<img id="roastInputThree" src={DarkRoast} />
									</label>
									<a data-tip data-for="dark" id="textlmd">Dark</a>
									<ReactTooltip id="dark" type="dark">
										<span>Dark roast coffee is a dark brown color and often has an oily surface. These coffees have a low acidity, heavy body, and tend to reveal deeper, darker flavors.</span>
									</ReactTooltip>
								</div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
						<div
							className="col col-sm-4 col-md-4 col-lg-4"
							id="brewErrorMessage"
						></div>
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
					</div>
					<div className="row">
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
						<div
							className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center"
							id="tracker"
						>
							{this.renderRedirect()}
							<button
								type="button"
								id="brew-btn"
								className="btn btn-primary"
								onClick={this.setRedirect}
							>
								Brew!
							</button>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4"></div>
					</div>
				</div>
			</>
		);
	}
}
export default Chemex;
