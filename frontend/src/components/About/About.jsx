import { Typography, Container } from "@mui/material";
import React from "react";
import AboutCard from "./AboutCard";
import { DeveloperData } from "./DeveloperData";

export default function About() {
  return (
    <section id="About">
      <Container variant="section-container">
        <Typography variant="h5">ABOUT THE DEVELOPERS</Typography>
        <Container
          variant="column"
          style={{ paddingLeft: "12%", paddingRight: "12%" }}
        >
          {DeveloperData.map((dev, index) => (
            <AboutCard developer={dev} key={index} index={index} />
          ))}
        </Container>
      </Container>
    </section>
  );
}
