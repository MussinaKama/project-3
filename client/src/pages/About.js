import React, { Component } from "react";
import {AboutWrapper} from "../styles/index";

class About extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
        <AboutWrapper>
          <h1>Trip Planner</h1>
          <img src={process.env.PUBLIC_URL + '/travel-background.png'} alt="travel"/> 
        </AboutWrapper>
    );
  }
}

export default About;