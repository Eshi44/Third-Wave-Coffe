import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import History from "../../images/history.png";
import { Link } from "react-router-dom";
import "./Brew.css";
import axios from "axios";
import $ from "jquery";

class Brew extends Component {
	state = {
		drinkID: "",
		brew: {},
	};

	componentDidMount() {
		var drinkID = localStorage.getItem("drinkID");
		// console.log("IS THERE A DRINK ID IN LOCAL?????");
		console.log(drinkID);
		this.setState({ drinkID: drinkID });
		var brew;

		axios
			.get(`/api/history/one/${drinkID}`, {})
			.then(async (response) => {
				// console.log("I AM about to log response");
				console.log(response);
				brew = {
					method: response.data.method,
					notes: response.data.notes,
					rating: response.data.rating,
					roast: response.data.roast,
					size: response.data.size,
					strength: response.data.strength,
				};
				console.log(brew);
				this.setState({ brew: brew });
				if (this.state.brew.notes !== "")
					$("#exampleFormControlTextarea1").val(this.state.brew.notes);
				if (this.state.brew.rating !== 0) {
					$(`#star${this.state.brew.rating}`).prop("checked", true);
					this.starClicked();
				}
				this.showInstructions();
			})
			.catch((err) => {
				console.log(err);
			});
	}

	starClicked() {
		// console.log("YOU CLIKEDDD A STARRR!");
		var val = document.querySelectorAll("input[name=rating]:checked")[0].value;
		console.log(val);
		var clear = 5;
		while (clear >= 1) {
			$(`#star${clear}`).css({ color: "black" });
			clear--;
		}
		while (val >= 1) {
			$(`#star${val}`).css({ color: "orange" });
			val--;
		}
	}

	showInstructions() {
		var instructions = {
			ratio: "",
			groundSize: "",
			groundAmount: "",
			waterAmount: "",
			waterTemp: "",
			time: "",
		};
		//this is a sin>>
		//method conditionals
		if (this.state.brew.method === "Chemex") {
			instructions.groundSize = "medium coarsely ground";
			instructions.time = "3min 30s";
		}

		if (this.state.brew.method === "Aeropress") {
			instructions.groundSize = "finely ground";
			instructions.time = "2min 15s";
		}
		if (this.state.brew.method === "Frenchpress") {
			instructions.groundSize = "coarsely ground";
			instructions.time = "4min 25s";
		}
		//roast conditionals
		if (this.state.brew.roast === "Light") {
			instructions.waterTemp = "200°F";
		}
		if (this.state.brew.roast === "Medium") {
			instructions.waterTemp = "195°F";
		}
		if (this.state.brew.roast === "Dark") {
			instructions.waterTemp = "190°F";
		}

		// strength conditionals
		// strong
		if (
			this.state.brew.strength === "Strong" &&
			this.state.brew.size === "Large"
		) {
			instructions.ratio = "13mL water to 1g coffee";
			instructions.groundAmount = "13.85g";
			instructions.waterAmount = "180mL";
		}
		if (
			this.state.brew.strength === "Strong" &&
			this.state.brew.size === "Medium"
		) {
			instructions.ratio = "13mL water to 1g coffee";
			instructions.groundAmount = "11.54g";
			instructions.waterAmount = "150mL";
		}
		if (
			this.state.brew.strength === "Strong" &&
			this.state.brew.size === "Small"
		) {
			instructions.ratio = "13mL water to 1g coffee";
			instructions.groundAmount = "9.23g";
			instructions.waterAmount = "120mL";
		}
		//medium
		if (
			this.state.brew.strength === "Medium" &&
			this.state.brew.size === "Large"
		) {
			instructions.ratio = "16mL water to 1g coffee";
			instructions.groundAmount = "11.25g";
			instructions.waterAmount = "180mL";
		}
		if (
			this.state.brew.strength === "Medium" &&
			this.state.brew.size === "Medium"
		) {
			instructions.ratio = "16mL water to 1g coffee";
			instructions.groundAmount = "9.38g";
			instructions.waterAmount = "150mL";
		}
		if (
			this.state.brew.strength === "Medium" &&
			this.state.brew.size === "Small"
		) {
			instructions.ratio = "16mL water to 1g coffee";
			instructions.groundAmount = "7.50g";
			instructions.waterAmount = "120mL";
		}
		//weak
		if (
			this.state.brew.strength === "Weak" &&
			this.state.brew.size === "Large"
		) {
			instructions.ratio = "18mL water to 1g coffee";
			instructions.groundAmount = "10g";
			instructions.waterAmount = "180mL";
		}

		if (
			this.state.brew.strength === "Weak" &&
			this.state.brew.size === "Medium"
		) {
			instructions.ratio = "18mL water to 1g coffee";
			instructions.groundAmount = "8.33g";
			instructions.waterAmount = "150mL";
		}

		if (
			this.state.brew.strength === "Weak" &&
			this.state.brew.size === "Small"
		) {
			instructions.ratio = "18mL water to 1g coffee";
			instructions.groundAmount = "7.17g";
			instructions.waterAmount = "120mL";
		}

		$("#card-body").append(`<div className="card-body" id="paddingPlease">
		<div className="col col-sm-4 col-md-4 col-lg-4">
			<h4 >Instructions: </h4>
			<p id="instructionsTextBold">${this.state.brew.size} sized, ${this.state.brew.strength} strength, ${this.state.brew.roast} roast </p>
			<p id= "instructionsText"> First, take out and set aside your ${this.state.brew.method}. Grab approximatley ${instructions.waterAmount} of water and ${instructions.groundAmount} of ${instructions.groundSize} coffee.
			Next, boil the ${instructions.waterAmount} of water to ${instructions.waterTemp}. Brew coffee for approximately ${instructions.time}.</p>
			<h5>Ratio:</h5><p id= "instructionsText">${instructions.ratio}</p>
			<h5>Ground Size:</h5> <p id= "instructionsText">${instructions.groundSize}</p>
			<h5>Ground Amount:</h5> <p id= "instructionsText">${instructions.groundAmount}</p>
			<h5>Water Amount:</h5>  <p id= "instructionsText">${instructions.waterAmount}</p>
			<h5>Water Temp:</h5><p id= "instructionsText">${instructions.waterTemp}</p>
			<h5>Time:</h5><p id= "instructionsText">${instructions.time}</p>
		</div>
		<div className="col col-sm-4 col-md-4 col-lg-4"></div>
		<div className="col col-sm-4 col-md-4 col-lg-4"></div>
	</div>`);
	}

	save() {
		var rating = document.querySelectorAll("input[name=rating]:checked")[0];

		var drinkID = localStorage.getItem("drinkID");
		// console.log("WUTTTT????????");
		console.log(rating);

		if (rating !== undefined) {
			rating = rating.value;
			axios
				.put(`/api/history/update/ratings/${drinkID}`, {
					rating,
				})
				.then(async (response) => {
					// console.log("I AM SAVING ME A RATING");
				})
				.catch((err) => {
					console.log(err);
				});
		}

		var notes = $("#exampleFormControlTextarea1").val();
		console.log(notes);
		if (notes !== undefined) {
			axios
				.put(`/api/history/update/notes/${drinkID}`, {
					notes,
				})
				.then(async (response) => {
					// console.log("I AM SAVING ME A NOTE");
				})
				.catch((err) => {
					console.log(err);
				});
		}
	}

	render() {
		return (
			<>
				<Header name="Brew" />
				<div className="container">
					<div className="row">
						<div
							className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center"
							id="setBrewRating"
						>
							<input
								type="radio"
								onClick={this.starClicked}
								name="rating"
								value="1"
								id="star1"
								className="fa fa-star fa-3x"
							/>{" "}
							<input
								type="radio"
								onClick={this.starClicked}
								name="rating"
								value="2"
								id="star2"
								className="fa fa-star fa-3x"
							/>{" "}
							<input
								type="radio"
								onClick={this.starClicked}
								name="rating"
								value="3"
								id="star3"
								className="fa fa-star fa-3x"
							/>{" "}
							<input
								type="radio"
								onClick={this.starClicked}
								name="rating"
								value="4"
								id="star4"
								className="fa fa-star fa-3x"
							/>{" "}
							<input
								type="radio"
								onClick={this.starClicked}
								name="rating"
								value="5"
								id="star5"
								className="fa fa-star fa-3x"
							/>{" "}
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4 ">
							<div className="form-group">
								<label htmlFor="exampleFormControlTextarea1" id="notes">
									Notes:
								</label>
								<textarea
									className="form-control"
									id="exampleFormControlTextarea1"
									rows="3"
								></textarea>
							</div>
							<Link to="/history">
								<button
									type="button"
									id="save-btn"
									onClick={this.save}
									className="btn btn-primary"
								>
									Save
								</button>
							</Link>
						</div>
						<div className="col col-sm-4 col-md-4 col-lg-4" id="history">
							<Link to="/history">
								<img
									className="img-responsive"
									id="hover"
									src={History}
									alt="History"
								/>
							</Link>{" "}
						</div>
						<div className="container" id="cardCalculation">
							<div className="card" id="card-body"></div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Brew;
