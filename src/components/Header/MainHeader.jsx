import React from "react";
import { Typography, Box, Chip, Avatar, Stack } from "@mui/material";
import useMediaQuery from "../../utilities/useMediaQuery";
import { ToolData } from "./ToolData";

export default function MainHeader() {
  const smallView = useMediaQuery(0, "480px");
  const mediumView = useMediaQuery("480px", "1180px");
  const largeView = useMediaQuery("1180px", "1660px");
  const specialBreakPoint = useMediaQuery(0, "920px");
  const logoHeight = smallView
    ? "16vmin"
    : mediumView
    ? "18vmin"
    : largeView
    ? "23vmin"
    : "28vmin";
  return (
    <section id="Home">
      <Box
        sx={{
          px: "8%",
          py: 4,
          ...(smallView && { py: 2 }),
        }}
      >
        <Typography
          variant="h1"
          sx={{
            ...(smallView && {
              fontSize: "3.5rem",
            }),
            ...(mediumView && {
              fontSize: "5rem",
            }),
            ...(largeView && {
              fontSize: "8rem",
            }),
          }}
        >
          {"This page was "}
          {!specialBreakPoint && <br />}
          {"built using"}
        </Typography>
        <Box
          sx={{
            marginTop: "10px",
            ...(largeView && { marginTop: "5px" }),
            ...(mediumView && { marginTop: "10px" }),
            ...(smallView && { marginTop: "-30px", marginRight: "-10px" }),
          }}
        >
          <img
            src="/images/React_logo.gif"
            style={{
              height: logoHeight,
              // height: "30vmin",
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
        <Box
          sx={{
            position: "absolute",
            bottom: "19%",
            left: "8%",
            ...(smallView && { bottom: "10%", left: "4%" }),
            ...(mediumView && { bottom: "12%", left: "4%" }),
            ...(largeView && { bottom: "14%", left: "8%" }),
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontSize: "50px",
              ...(largeView && { fontSize: "40px" }),
              ...(mediumView && { fontSize: "30px" }),
              ...(specialBreakPoint && { fontSize: "20px" }),
            }}
          >
            Powered by
          </Typography>
          <Stack direction="row" sx={{ mt: "1rem" }} flexWrap="wrap">
            {ToolData.map((tool, index) => (
              <Box
                key={index}
                sx={{
                  py: "1px",
                  ...(index === 1 && { flexBasis: "70%" }),
                }}
              >
                <Chip
                  color="primary"
                  label={tool.name}
                  sx={{
                    ...(!specialBreakPoint && {
                      marginLeft: "45px",
                      marginBottom: "15px",
                    }),
                    ...(index === 1 && { flexBasis: "70%" }),
                  }}
                  avatar={<Avatar alt={`${tool.name} logo`} src={tool.image} />}
                />
              </Box>
            ))}
          </Stack>
        </Box>
        {specialBreakPoint ? (
          <svg
            viewBox="0 0 1078 372"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 371H1077V224.625C1077 224.625 798 214.406 533 90.3042C268 -33.7972 1 7.64529 1 7.64529V371Z"
              fill="#8691AE"
              stroke="#8691AE"
            />
          </svg>
        ) : (
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
        )}
      </Box>
    </section>
  );
}
