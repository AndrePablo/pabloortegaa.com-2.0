import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/lion.png";
import world from "../assets/programming.png";
import {
  AiFillStar,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { CgGitFork } from "react-icons/cg";
import { Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import resume from "../assets/Pablo-Ortega-Resume.pdf";

function Navbar() {
  const [mobileDropDown, setMobileDropDown] = useState(false);

  const toggleDropDown = () => {
    setMobileDropDown = !mobileDropDown;
  };

  return (
    <nav className="navbar" role="navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <p class="image is-32x32">
            <img src={world} />
          </p>
          <p class="image is-32x32">
            <img src={logo} />
          </p>
          <div id="navbar-item-name" className="navbar-item">
            <button className="is-link">pabloortega.com</button>
          </div>
          <Row>
            <Col md={12} className="home-about-social">
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                    href="https://github.com/AndrePablo"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>

                <li className="social-icons">
                  <a
                    href="https://www.linkedin.com/in/portega-andre/"
                    target="_blank"
                    rel="noreferrer"
                    className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </div>

        <button
          onClick={toggleDropDown}
          className={`navbar-burger burger is-link ${
            mobileDropDown ? "is-active" : ""
          }`}
          data-target="nav-bar"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div
        id="nav-bar"
        className={`navbar-menu ${mobileDropDown ? "is-active" : ""}`}
      >
        <div className="navbar-end">
          <div className="navbar-container">
            <ul>
              <li className="nav-link">
                <a href="#">
                  <AiOutlineFundProjectionScreen />
                  <Link to="/pabloortegaa.com-2.0">Projects</Link>
                </a>
                <div className="underline"></div>
              </li>

              <li className="nav-link">
                <a href="#">
                  <AiOutlineUser />
                  <Link to="/about">About</Link>
                </a>
                <div class="underline"></div>
              </li>

              <li className="nav-link">
                <a href="#">
                  <CgGitFork />
                  <Link to="/experience">Experience</Link>
                </a>
                <div className="underline"></div>
              </li>

              <li className="nav-link">
                <a href="mailto:portega.andre@gmail.com">
                  <AiFillStar />
                  Contact
                </a>
                <div className="underline"></div>
              </li>

              <li className="nav-link">
                <a href={resume} target="_blank">
                  <CgFileDocument />
                  Resume
                </a>
                <div className="underline"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
