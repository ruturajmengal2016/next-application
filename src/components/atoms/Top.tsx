"use client";
import * as React from "react";
import { Box, Typography, Button } from "@mui/material";
interface ITopProps {}

const Top: React.FunctionComponent<ITopProps> = (props) => {
  return (
    <Box
      sx={{
        minHeight: "25%",
        width: "100%",
        backgroundColor: "lightcoral",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "1rem 0rem",
      }}
    >
      <Typography variant="h4">Prodient anim nor nulla iste.</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          gap: "0.5rem",
        }}
      >
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </Typography>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#1a237e",
            }}
          >
            Ipsum lorem
          </Button>
          <Button variant="outlined">Ipsum lorem</Button>
          <Button variant="outlined">Ipsum lorem</Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Top;
