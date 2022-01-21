import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import logo from "../../../images/Logo_AuroZone.png";

const About = () => {
  const visitLinkedin = () => {
    window.location = "https://www.linkedin.com/in/arabinda-behera";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src={logo}
              alt="Founder"
            />
            <Typography>Auro Zone E-Commerce</Typography>
            <Button onClick={visitLinkedin} color="primary">
              Visit LinkedIn
            </Button>
            <span>
              This is a sample wesbite made by Arabinda Behera. Only with the
              purpose to learn MERN Stack and create a fully functional
              E-Commerce website.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect With Me</Typography>
            <a
              href="https://www.linkedin.com/in/arabinda-behera"
              target="blank"
            >
              <LinkedInIcon className="linkedinSvgIcon" />
            </a>
            <a
              href="https://www.facebook.com/arvind.behera.9"
              target="blank"
            >
              <FacebookIcon className="facebookSvgIcon" />
            </a>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
