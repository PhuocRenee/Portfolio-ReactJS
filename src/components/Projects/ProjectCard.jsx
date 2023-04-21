import {
  Typography,
  Card,
  CardMedia,
  CardContent,
  Divider,
  Button,
} from "@mui/material";

const ProjectCard = ({ data }) => {
  // const frameworkName = data.name.replace("Portfolio-", "");
  const frameworkName = data.title;
  return (
    <Card variant="project">
      <CardMedia
        sx={{ objectFit: "contain" }}
        component="img"
        height="140"
        image={`/images/${frameworkName.toLowerCase()}.svg`}
        alt={`${frameworkName} logo`}
      ></CardMedia>
      <Divider variant="middle" sx={{ paddingTop: 2, borderBottomWidth: 3 }} />
      <Typography variant="h6">{frameworkName}</Typography>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Button
          variant="project-card"
          onClick={() => {
            window.open(data.live);
          }}
        >
          LIVE
        </Button>
        <Button
          variant="project-card"
          onClick={() => {
            window.open(data.git);
          }}
        >
          REPO
        </Button>
        <Button
          variant="project-card"
          onClick={() => {
            window.open(
              "https://www.figma.com/file/3aSf5FunmLZ2oJADyVfnZk/React-Portfolio?node-id=0-1&t=6hMztcIfBznjdkiZ-0"
            );
          }}
        >
          DESIGN
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
