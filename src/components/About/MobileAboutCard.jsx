import {
  Typography,
  Card,
  Container,
  CardMedia,
  CardContent,
  Divider,
} from "@mui/material";

const MobileAboutCard = ({ developer }) => {
  return (
    <Container
      variant="column"
      sx={{
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <Card
        variant="about-image"
        sx={{ width: "240px", height: "450px", pt: "0" }}
      >
        <CardMedia
          sx={{ objectFit: "cover", overflow: "hidden" }}
          component="img"
          height="240px"
          width="240px"
          image={developer.image}
        />
        <Divider
          variant="middle"
          sx={{ paddingTop: 2, borderBottomWidth: 3 }}
        />
        <Typography variant="h6">{developer.name}</Typography>

        <CardContent sx={{ pt: 1, textAlign: "justify" }}>
          <Typography variant="paragraph">{developer.text}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default MobileAboutCard;
