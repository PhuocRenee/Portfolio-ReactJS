import { Typography, Container, Card, CardContent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { octokit } from "../../utilities/octokit";
import ProjectCard from "./ProjectCard";
import { Info } from "../About/DeveloperData";
// import useMediaQuery from "../../utilities/useMediaQuery";

export default function Projects() {
  // const [projects, setProjects] = useState([]);

  const projects = [
    {
      name: "Portfolio-NextJs",
      homepage: "https://test.com",
      html_url: "https://test.com",
    },
    {
      name: "Portfolio-Angular",
      homepage: "https://test.com",
      html_url: "https://test.com",
    },
  ];

  // const smallView = useMediaQuery(0, "480px");

  // useEffect(() => {
  //   console.log("hi");
  //   const getProjects = async () => {
  //     try {
  //       const list = await octokit.request("GET /orgs/PhuocRenee/repos", {});
  //       console.log(list.data);
  //       setProjects(list.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };
  //   getProjects();
  // }, []);

  return (
    <section id="Projects" style={{ backgroundColor: "#8691AE" }}>
      <Container variant="section-dark">
        <Typography variant="h5">
          VIEW THE OTHER VERSIONS OF THIS PAGE
        </Typography>
        <Card variant="about-project" sx={{ mx: "8%" }}>
          <CardContent sx={{ px: 10 }}>
            <Typography variant="h6">{Info.header}</Typography>
            <Typography variant="paragraph">{Info.text}</Typography>
          </CardContent>
        </Card>
        <Container
          // variant={smallView ? "column" : "row"}
          variant="row"
          sx={{ mb: "1rem" }}
        >
          {projects
            .filter((project) => !project.name.includes("React"))
            .map((project, index) => (
              <ProjectCard data={project} key={index} />
            ))}
        </Container>
      </Container>
    </section>
  );
}
