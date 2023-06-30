"use client";
import { Box, Typography, Link } from "@mui/material";
import * as React from "react";
import { links } from "../Header";
interface IDeskMenuProps {
  menu: boolean;
  index: number;
}

const DeskMenu: React.FunctionComponent<IDeskMenuProps> = ({ menu, index }) => {
  return (
    <Box
      sx={{
        position: "relative",
        zIndex: 5,
        height: "20rem",
        display: {
          xs: "none",
          md: menu ? "flex" : "none",
        },
        backgroundColor: "whitesmoke",
        justifyContent: "center",
        boxSizing: "border-box",
        padding: "0rem 1rem",
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography fontWeight="bold">Ipsum lorem</Typography>
        {links[index].map((ele, ind) => {
          return (
            <Link
              key={ind}
              borderBottom="1px solid gray"
              sx={{
                padding: "0.5rem",
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "lightgrey",
                },
              }}
            >
              {ele}
            </Link>
          );
        })}
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <Typography fontWeight="bold">Ipsum lorem</Typography>
        {links[index].map((ele, ind) => {
          return (
            <Link
              key={ind}
              borderBottom="1px solid gray"
              sx={{
                padding: "0.5rem",
                cursor: "pointer",
                textDecoration: "none",
                "&:hover": {
                  backgroundColor: "lightgrey",
                },
              }}
            >
              {ele}
            </Link>
          );
        })}
      </Box>
    </Box>
  );
};

export default DeskMenu;
