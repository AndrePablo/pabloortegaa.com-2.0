import React from "react";
import img from "../assets/AboutMe2.jpg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="main-container">
      <div className="block">
        <div className="container-about-img">
          <div className="card-image">
            <img src={img} alt="Placeholder image" />
          </div>
        </div>
      </div>

      <motion.div
        className="block"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <div className="container-about-msg">
          <article className="message is-link">
            <div className="message-header">
              <span role="img" aria-label="Hand">
                👋
              </span>
            </div>
            <div className="message-body">
              <div className="block">
                <strong>
                  My name is Pablo Ortega, an upcoming computer science graduate
                  from the University of Western Ontario.
                </strong>
              </div>

              <div className="block">
                <strong>
                  I am extremely passionte about learning and understanding all
                  aspects of technology and software systems. Driven by
                  challenges, hungry for self-improvement, and committed myself
                  to always strive for more.
                </strong>
              </div>
              <div className="block">
                <strong>Feel free to reach out for anything!</strong>
              </div>
            </div>
          </article>
        </div>
      </motion.div>
      <br />
    </div>
  );
};

export default About;
