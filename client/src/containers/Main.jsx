import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";

class Main extends Component {
    render() {
      return (
        <>
        <NavBar />
        <div id="homepage-cover">
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>Welcome!</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Main;