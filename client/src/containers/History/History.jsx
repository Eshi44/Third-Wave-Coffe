import React, { Component } from "react";
import Header from "../../components/Shared/Header/Header";
import "./History.css";
import { Link } from "react-router-dom";

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
						<tbody>
							<tr>
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
									<button type="button" class="btn btn-danger" id="delete-btn">
										Delete
									</button>
								</td>
							</tr>
							<tr>
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
								<td>5/11/20</td>
								<td>Frenchpress</td>
								<td>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
								</td>
								<td>Blah blah blah...</td>
								<td>
									<button type="button" class="btn btn-danger" id="delete-btn">
										Delete
									</button>
								</td>
							</tr>
							<tr>
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
								<td>5/10/20</td>
								<td>Aeropress</td>
								<td>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star checked"></span>
									<span className="fa fa-star"></span>
								</td>
								<td>Blah blah blah...</td>
								<td>
									<button type="button" class="btn btn-danger" id="delete-btn">
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}
export default History;
