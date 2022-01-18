import React from "react";
import "./About.css";
import { Button, Typography, Avatar } from "@mui/material";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/auromika_parida";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dlmx5pu7k/image/upload/v1642527074/My%20Pics/mypic_ayzekw.jpg"
              alt="Founder"
            />
            <Typography>Arabinda Behera and Auromika Parida</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by Arabinda Behera. Only with the
              purpose to learn MERN Stack and create a website for the youtube channel - Odia NRI Vlogger Auromika.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/c/OdiaNRIVloggerAuromika"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://www.instagram.com/auromika_parida" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;