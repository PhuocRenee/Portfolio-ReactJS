import { Typography, Container, Card, CardContent, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { octokit } from "../../utilities/octokit";
import ProjectCard from "./ProjectCard";
import { Info } from "../About/DeveloperData";
// import { ProjectData } from "./ProjectData";
import useMediaQuery from "../../utilities/useMediaQuery";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const smallView = useMediaQuery(0, "480px");
  const mediumView = useMediaQuery(0, "770px");
  const getProjects = async () => {
    try {
      const list = await octokit.request("GET /orgs/PhuocRenee/repos", {});
      console.log(list.data);
      setProjects(list.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <section id="Projects" style={{ backgroundColor: "#8691AE" }}>
      <Container variant="section-dark">
        <Typography variant="h5">
          VIEW THE OTHER VERSIONS OF THIS PAGE
        </Typography>
        <Card variant="about-project" sx={{ ...(!smallView && { mx: "8%" }) }}>
          <CardContent
            sx={{ px: 3, textAlign: "justify", ...(!smallView && { px: 10 }) }}
          >
            <Typography variant="h6" sx={{ pt: 0, pb: 1 }}>
              {Info.header}
            </Typography>
            <Typography variant="paragraph" sx={{ textAlign: "justify" }}>
              {Info.text}
            </Typography>
          </CardContent>
        </Card>
        <Container
          variant={mediumView ? "column" : "row"}
          // variant="row"
          sx={{ mb: "1rem" }}
        >
          {projects
            .filter((project) => !project.name.includes("React"))
            .map((project, index) => (
              <Box key={index} sx={{ ...(mediumView && { mb: 2 }) }}>
                <ProjectCard data={project} />
              </Box>
            ))}
        </Container>
      </Container>
    </section>
  );
}
