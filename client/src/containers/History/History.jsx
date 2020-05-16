import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./History.css";
import { Link } from "react-router-dom";
import axios from "axios";

class History extends Component {
	constructor() {
		super();
		var queryString = window.location.pathname;
		var method = queryString.split("/");

		console.log(method);
		this.state = {
			name: method,
		};
	}

	componentDidMount() {
		// GET ALL DRINKS FROM USER
		const username = localStorage.getItem("username");
		console.log(username);
		axios
			.get(`/api/history/all/${username}`, {
				username,
			})
			.then(async (response) => {
				console.log(response);
				// test to make sure empty case works
				if (response.data !== []) {
					for (var i = 0; i < response.data.drinks.length; i++) {
						var id = response.data.drinks[i];
						console.log(id);
						this.getDrink(id);
					}
				}
			})
			.catch((err) => {
				console.log(err);
				console.log(err.response.data.message);
				this.setState({ error: "Failure" });
			});
	}



	
postDrink(date, method, notes, rating) {
	console.log(date);
	console.log(method);
	console.log(notes);
	console.log(rating);


// $("#drinkTableInsert").append(`<tr >
// <th scope="row">
// 	<Link to="/brew">
// 		<button
// 			type="button"
// 			id="brew-btn-brew"
// 			className="btn btn-primary"
// 		>
// 			Brew!
// 		</button>
// 	</Link>
// </th>
// <td></td>
// <td>Chemex</td>
// <td>
// 	<span className="fa fa-star checked"></span>
// 	<span className="fa fa-star checked"></span>
// 	<span className="fa fa-star checked"></span>
// 	<span className="fa fa-star"></span>
// 	<span className="fa fa-star"></span>
// </td>
// <td>Blah blah blah...</td>
// <td>
// 	<button
// 		type="button"
// 		className="btn btn-danger"
// 		id="delete-btn"
// 	>
// 		Delete
// 	</button>
// </td>
// </tr>`);





	}



 getDrink(id) { 
	axios
	.get(`/api/history/one/${id}`, {
		id,
	})
	.then(async (response) => {
		console.log("GREAT SUCCESS");
		console.log(response);
		var formatedDate = new Date(response.data.date).toLocaleDateString("en-US");
        this.postDrink(formatedDate, response.data.method, response.data.notes, response.data.rating);
	//    date: "2020-05-15T14:55:38.574Z"
	//    favorite: true
	//    method: "aeropress"
	//    notes: "Black as night!"
	//    rating: 3
	})
	.catch((err) => {
		console.log(err);
		console.log(err.response.data.message);
		this.setState({ error: "Failure" });
	});
}





	render() {
		return (
			<div>
				<Header name={this.state.name} />

				<div className="container">
					<table className="table table-striped table-borderless">
						<thead>
							<tr>
								<th scope="col">Brew</th>
								<th scope="col">Date</th>
								<th scope="col">Method</th>
								<th scope="col">Rating</th>
								<th scope="col">Notes</th>
								<th scope="col">Delete</th>
							</tr>
						</thead>
						<tbody id="drinkTableInsert">

{/* ----------------------- */}



							<tr >
								<th scope="row">
									<Link to="/brew">
										<button
											type="button"
											id="brew-btn-brew"
											className="btn btn-primary"
										>
											Brew!
										</button>
									</Link>
								</th>
								<td>5/12/20</td>
								<td>Chemex</td>
								<td>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
									<span className="fa fa-star"></span>
								</td>
								<td>Blah blah blah...</td>
								<td>
									<button
										type="button"
										className="btn btn-danger"
										id="delete-btn"
									>
										Delete
									</button>
								</td>
							</tr>


{/* ----------------------- */}


						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default History;
