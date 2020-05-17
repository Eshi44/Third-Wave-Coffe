import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./History.css";
import axios from "axios";
import $ from "jquery";

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
				
				this.setState({ error: "Failure" });
			});
	}






	postDrink(date, method, notes, rating, id) {
		console.log(date);
		console.log(method);
		console.log(notes);
		console.log(rating);
		console.log(id);

        // console.log("BELOW IS MY ID FROM LOCAL STORAGE");
		// console.log(localStorage.getItem("drinkID"));
	




		$("#drinkTableInsert").append(`<tr id="row${id}" >
<th scope="row">
	<a href="/brew">
		<button
			type="button"
			id="brew-btn-brew${id}"
			className="btn btn-primary"
		>
			Brew!
		</button>
	</a>
</th>
<td>${date}</td>
<td>${method}</td>
<td>
${rating}/5
</td>
<td>${notes}</td>
<td>
	<button
		type="button"
		className="btn btn-danger"
		id="delete-btn${id}"
	>
		Delete
	</button>
</td>
</tr>`);


$(`#brew-btn-brew${id}`).click(function() {

	if(localStorage.getItem("drinkID") != "")
	localStorage.removeItem("drinkID");
	localStorage.setItem("drinkID", id);
});

$(`#delete-btn${id}`).click(function() {
	axios
			.delete(`/api/history/delete/${id}`, {
				id,
			})
			.then(async (response) => {
				console.log("DELETE SUCCESS");
				$(`#row${id}`).remove();
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
				console.log(err.response.data.message);
				this.setState({ error: "DELETE Failure" });
			});
  });

	}


	getDrink(id) {
		axios
			.get(`/api/history/one/${id}`, {
				id,
			})
			.then(async (response) => {
				console.log("DRINK GREAT SUCCESS");
				console.log(response);
				var formatedDate = new Date(response.data.date).toLocaleDateString(
					"en-US"
				);
				this.postDrink(
					formatedDate,
					response.data.method,
					response.data.notes,
					response.data.rating,
					response.data._id,
				);

			})
			.catch((err) => {
				console.log(err);
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

							
							{/* ----------------------- */}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default History;
