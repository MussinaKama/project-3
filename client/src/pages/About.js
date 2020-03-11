import React, { Component } from "react";
import { AboutWrapper } from "../styles/index";
import { motion } from "framer-motion";

class About extends Component {
  state = {
    loggedIn: false
  };

  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <AboutWrapper>
          <h1>Trip Planner</h1>
          <p>
            Welcome to Trip Planner! Trip Planner comes with multiple tools to
            help you have a fantastic experience when traveling around the
            world. Inside our application you will have access to add
            restaurants, festivals, what to bring, events, photos, ideas to your
            next upcoming trip.
          </p>
          <p>
            All the information that is gathered and saved over time you will
            create an itinerary that will be ready for your next big trip.
          </p>
          <img
            src={process.env.PUBLIC_URL + "/travel-background.png"}
            alt="travel"
          />
          <p>
            Click <a href="/signup"> Sign-Up</a> to start using App.
          </p>
        </AboutWrapper>
      </motion.div>
    );
  }
}

export default About;
