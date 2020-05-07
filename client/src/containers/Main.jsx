import React, { Component } from "react";
import NavBar from "../components/Shared/NavBar";
import "./Main.css";
class Main extends Component {
    render() {
      return (
        <>
        <NavBar />
        <div id="homepage-cover">
          <div className="container">
            <div className="row">
              <div className="col-4">
            
              </div>
              <div className="col-4">
                <h1>Third Wave Coffee</h1>
              </div>
              <div className="col-4">
             
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