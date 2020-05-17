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
	};

	componentDidMount() {
		var drinkID = localStorage.getItem("drinkID");
		this.setState({ drinkID: drinkID });
		var brew;

		axios
			.get(`/api/history/one/${drinkID}`, {})
			.then(async (response) => {
				console.log("I AM GETTING A DRINK DATAAAAA");
				brew = {
					// method: response.data.method,
					notes: response.data.notes,
					rating: response.data.rating,
					roast: response.data.roast,
					size: response.data.size,
					strenth: response.data.strength,
				};
				console.log(brew);
				// test to make sure empty case works
			})
			.catch((err) => {
				console.log(err);
			});

		// var rating = document.querySelectorAll("input[name=rating]:checked")[0].value;
	}

	starClicked() {
		console.log("YOU CLIKEDDD A STARRR!");
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

	save() {
		var rating = document.querySelectorAll("input[name=rating]:checked")[0]
			.value;
		var drinkID = localStorage.getItem("drinkID");

		if (rating !== null) {
			axios
				.put(`/api/history/update/ratings/${drinkID}`, {
					rating,
				})
				.then(async (response) => {
					console.log("I AM SAVING ME A RATING");

					// test to make sure empty case works
				})
				.catch((err) => {
					console.log(err);
				});
		}

		var notes = $("#exampleFormControlTextarea1").val();
		console.log(notes);
		if (notes !== null) {
			axios
				.put(`/api/history/update/notes/${drinkID}`, {
					notes,
				})
				.then(async (response) => {
					console.log("I AM SAVING ME A NOTE");

					// test to make sure empty case works
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
							<div class="form-group">
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
							<div className="card" id="card-body">
								<div className="card-body">
									<div className="col col-sm-4 col-md-4 col-lg-4">
										<h4>Instructions:</h4>
										<p>.....</p>
										<h5>Ratio:</h5>
										<h5>Ground Size:</h5>
										<h5>Ground Amount:</h5>
										<h5>Water Amount:</h5>
										<h5>Water Temp:</h5>
										<h5>Time:</h5>
									</div>
									<div className="col col-sm-4 col-md-4 col-lg-4"></div>
									<div className="col col-sm-4 col-md-4 col-lg-4"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default Brew;
