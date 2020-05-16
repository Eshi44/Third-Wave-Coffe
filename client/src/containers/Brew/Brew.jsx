import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import History from "../../images/history.png";
import { Link } from "react-router-dom";
import "./Brew.css";

class Brew extends Component {
	constructor() {
		super();
		var queryString = window.location.pathname;
		var method = queryString.split("/");

		console.log(method);
		this.state = {
			name: method,
		};
	}
	render() {
		return (
			<>
				<Header name={this.state.name} />
				<div className="container">
					<div className="row">
						<div
							className="col col-sm-4 col-md-4 col-lg-4 d-flex justify-content-center"
							id="setBrewRating"
						>
							<span type="radio" id="star1" className="fa fa-star fa-3x"></span>
							<span type="radio" id="star2" className="fa fa-star fa-3x"></span>
							<span type="radio" id="star3" className="fa fa-star fa-3x"></span>
							<span type="radio" id="star4" className="fa fa-star fa-3x"></span>
							<span type="radio" id="star5" className="fa fa-star fa-3x"></span>
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
								<button type="button" id="save-btn" className="btn btn-primary">
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
