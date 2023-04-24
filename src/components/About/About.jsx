import { Typography, Container } from "@mui/material";
import React from "react";
import AboutCard from "./AboutCard";
import MobileAboutCard from "./MobileAboutCard";
import { DeveloperData } from "./DeveloperData";
import useMediaQuery from "../../utilities/useMediaQuery";

export default function About() {
  const breakpointOne = useMediaQuery(0, "980px");
  const breakpointTwo = useMediaQuery("800px", "980px");
  return (
    <section id="About">
      <Container variant="section-container">
        <Typography variant="h5">ABOUT THE DEVELOPERS</Typography>
        <Container
          variant={breakpointTwo ? "row" : "column"}
          sx={{ width: "65%" }}
        >
          {breakpointOne
            ? DeveloperData.map((dev, index) => (
                <MobileAboutCard developer={dev} key={index} index={index} />
              ))
            : DeveloperData.map((dev, index) => (
                <AboutCard developer={dev} key={index} index={index} />
              ))}
        </Container>
      </Container>
    </section>
  );
}
