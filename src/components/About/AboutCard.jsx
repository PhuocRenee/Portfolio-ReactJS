import { Typography, Card, Container, CardMedia } from "@mui/material";
import { isEven } from "../../utilities/isEven";

const AboutCard = ({ developer, index }) => {
  return (
    <Container
      variant="row"
      sx={{
        justifyContent: "space-between",
        ...(!isEven(index) && { flexDirection: "row-reverse" }),
      }}
    >
      <Card variant="about-image">
        <CardMedia
          sx={{ objectFit: "contain" }}
          component="img"
          height="140"
          image={developer.image}
        ></CardMedia>
        <Typography variant="h6">{developer.name}</Typography>
      </Card>
      <Card variant="about-card">
        <Typography variant="paragraph">{developer.text}</Typography>
      </Card>
    </Container>
  );
};

export default AboutCard;
