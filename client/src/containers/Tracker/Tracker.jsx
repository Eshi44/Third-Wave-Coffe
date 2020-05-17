import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./Tracker.css";
import { Chart } from "chart.js";
import axios from "axios";

class Tracker extends Component {
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
		//axios call get users drinks
		const username = localStorage.getItem("username");
		console.log(username);
		axios
			.get(`/api/history/all/${username}`, {
				username,
			})
			.then(async (response) => {
				console.log(response);
				if (response.data !== []) {
					for (var i = 0; i < response.data.drinks.length; i++) {
						var id = response.data.drinks[i];
						console.log(id);
						this.getDrinkForGraph(id);
					}
				}
			})
			.catch((err) => {
				console.log(err);

				this.setState({ error: "Failure" });
			});

		var ctx = document.getElementById("myChart").getContext("2d");
		var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: "line",

			// The data for our dataset
			data: {
				labels: [
					"1",
					"2",
					"3",
					"4",
					"5",
					"6",
					"7",
					"8",
					"9",
					"10",
					"11",
					"12",
					"13",
					"14",
					"15",
					"16",
					"17",
					"18",
					"19",
					"20",
					"21",
					"22",
					"23",
					"24",
					"25",
					"26",
					"27",
					"28",
					"29",
					"30",
					"31",
				],
				datasets: [
					{
						label: "Coffee Intake",
						borderColor: "#2a190f",
						data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4],
					},
				],
			},

			// Configuration options go here
			options: {},
		});
	}

	getDrinkForGraph(id) {
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
			})
			.catch((err) => {
				console.log(err);
			});
	}

	render() {
		return (
			<div>
				<Header name={this.state.name} />
				<div className="container" id="lineGraph">
					<canvas id="myChart"></canvas>
				</div>
			</div>
		);
	}
}
export default Tracker;
