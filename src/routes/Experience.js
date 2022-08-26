import React from "react";
import { motion } from "framer-motion";
import experiences from "../data/experience";

const Experience = () => {
  const renderDescriptionPoints = (description) => {
    var points = [];

    for (var i = 0; i < description.length; i++) {
      let d = description[i];

      let marginLeft = 0;
      if (d[0] === "-") {
        d = d.substring(1);
        marginLeft = 20;
      }

      points.push(
        <li key={i} style={{ marginLeft }}>
          {d}
        </li>
      );
    }

    return points;
  };

  const renderExperience = (experience, index) => {
    var descriptionPoints = renderDescriptionPoints(experience.description);
    return (
      <motion.div
        className="card experience-card"
        initial={{ x: -200 }}
        animate={{ x: 0 }}
        transition={{ stiffness: 100 }}
      >
        <article className="media">
          <div className="media-content">
            <p className="image">
              <img src={experience.img} alt="" />
            </p>
            <div className="content">
              <h1 className="title">{experience.position}</h1>
              <p>
                {experience.company} - {experience.location}
                <br />
                <small>{experience.dates} </small>
              </p>
              <ul>{descriptionPoints}</ul>
            </div>
          </div>
        </article>
      </motion.div>
    );
  };
  return (
    <div
      className="main-container"
      style={{
        marginTop: "150px",
      }}
    >
      <h1 className="h1-experience">Experience</h1>

      <br></br>
      <br></br>
      {experiences.map(renderExperience)}
      <br />
    </div>
  );
};

export default Experience;
