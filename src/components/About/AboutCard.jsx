import { Typography, Card, Container, CardMedia } from "@mui/material";
import { isEven } from "../../utilities/isEven";

const AboutCard = ({ developer, index }) => {
  return (
    <Container
      variant="row"
      sx={{
        justifyContent: "space-between",
        gap: "20px",
        ...(!isEven(index) && { flexDirection: "row-reverse" }),
      }}
    >
      <Card variant="about-image" sx={{ width: "140px", pt: "0" }}>
        <CardMedia
          sx={{ objectFit: "cover", overflow: "hidden" }}
          component="img"
          height="140px"
          width="140px"
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
