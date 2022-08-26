import React from "react";
import projects from "../data/projects";
import HeroBanner from "../components/HeroBanner";
import { motion } from "framer-motion";
import ProjectCards from "../components/ProjectCards";
import Footer from "../components/Footer";

const Home = () => {
  const renderProjects = () => {
    let cards = [];
    for (let i = 0; i < projects.length; i++) {
      const project = projects[i];
      cards.push(
        <motion.div
          className="column is-one-third"
          initial={{ x: -200 }}
          animate={{ x: 0 }}
          transition={{ stiffness: 100 }}
        >
          <ProjectCards
            img={project.img}
            title={project.title}
            description={project.description}
            code={project.code}
            demo={project.demo}
          />
        </motion.div>
      );
    }

    return cards;
  };
  return (
    <div>
      <div>
        <HeroBanner />
      </div>
      <br />
      <br />
      <h1 className="h1-experience">Projects</h1>

      <div className="main-container" style={{ marginTop: "50px" }}>
        <motion.div
          className="columns is-multiline"
          initial={{
            opacity: 0,
            y: 300,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          {renderProjects()}
        </motion.div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Home;
