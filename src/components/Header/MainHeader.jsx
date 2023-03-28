import React from "react";
import { Typography, Box, Chip, Avatar, Stack } from "@mui/material";
// import useMediaQuery from "../../utilities/useMediaQuery";
import { ToolData } from "./ToolData";

export default function MainHeader() {
  // const smallView = useMediaQuery(0, "480px");
  // const mediumView = useMediaQuery("480px", "1180px");
  // const largeView = useMediaQuery("1180px", "1660px");
  // const logoHeight = smallView
  //   ? "13vmin"
  //   : mediumView
  //   ? "15vmin"
  //   : largeView
  //   ? "19vmin"
  //   : "30vmin";
  return (
    <section id="Home">
      <Box
        sx={{
          px: "8%",
          py: 4,
        }}
      >
        <Typography
          variant="h1"
          sx={
            {
              // ...(smallView && { fontSize: "3rem" }),
              // ...(mediumView && { fontSize: "5rem" }),
              // ...(largeView && { fontSize: "8rem" }),
            }
          }
        >
          This page was built using
        </Typography>
        <Box
          sx={{
            marginTop: "-50px",
            // ...(largeView && { marginTop: "-20px" }),
            // ...(smallView && { marginTop: "10px" }),
          }}
        >
          <img
            src="/images/React_logo.gif"
            style={{
              // height: logoHeight,
              height: "30vmin",
              float: "right",
            }}
            alt="React logo"
          />
        </Box>
      </Box>
      <Box
        style={{
          position: "relative",
          borderRadius: 15,
          background:
            "linear-gradient(0deg, rgba(134,145,174,1) 0%, rgba(134,145,174,1) 20%, rgba(255,255,255,0) 23%, rgba(255,255,255,0) 100%)",
          paddingBottom: 10,
        }}
      >
        <Box sx={{ position: "absolute", bottom: "25%", left: "8%" }}>
          <Typography variant="h4">Powered by</Typography>
          <Stack spacing={4} direction="row" sx={{ mt: "1rem" }}>
            {ToolData.map((tool, index) => (
              <Chip
                color="primary"
                key={index}
                label={tool.name}
                avatar={<Avatar alt="Natacha" src={tool.image} />}
              />
            ))}
          </Stack>
        </Box>
        <svg
          viewBox="0 0 1075 217"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 216H1077V131C1077 131 798 125.066 533 53C268 -19.0656 1 5 1 5V216Z"
            fill="#8691AE"
            stroke="#8691AE"
          />
        </svg>
      </Box>
    </section>
  );
}
