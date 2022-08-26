import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCards = (props) => {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.img} alt="card-img" />
      <Card.Body>
        <h1 className="h1-projects">{props.title}</h1>
        <br />
        <p className="p-project">{props.description}</p>
        <br />

        <h2 className="h2-project">
          <Button variant="primary" href={props.code} target="_blank">
            <BsGithub /> code
          </Button>
        </h2>
        {props.demo && (
          <>
            <br />
            <h2 className="h2-project">
              <Button variant="primary" href={props.demo} target="_blank">
                <CgWebsite /> demo
              </Button>
            </h2>
          </>
        )}
      </Card.Body>
      <br />
    </Card>
  );
};

export default ProjectCards;
