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
          <h5>
            Welcome to Trip Planner where planning has never been so easy. Trip
            Planner comes with multiple tools to help you have a fantastic
            experience when traveling around the world. Inside our application
            you will have access to add restaurants, festivals, what to bring,
            events, photos, ideas and data to your next upcoming trip.
          </h5>
          <h5>
            All the information that is gathered and saved over time you will
            create an itinerary that will be ready for your next big trip. We
            make the time it takes planning your trip convienent, which gives
            you more time to focus on what's really important when traveling
            which is “Having Fun”!!!
          </h5>
          <img
            src={process.env.PUBLIC_URL + "/travel-background.png"}
            alt="travel"
          />
          <h6>
            Sign up for Trip Planner now, you are only wasting time.
            <a href="/signup"> Sign-Up here.</a>
          </h6>
        </AboutWrapper>
      </motion.div>
    );
  }
}

export default About;
