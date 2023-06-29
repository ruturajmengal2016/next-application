"use client";
import * as React from "react";
import styles from "../app/page.module.css";
import { Box, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
interface IHeaderProps {}

export const menus: string[] = ["Home", "About", "Contact", "Login"];
export const links: string[][] = [
  ["HomeLink", "HomeLink", "HomeLink", "HomeLink", "HomeLink"],
  ["AboutLink", "AboutLink", "AboutLink", "AboutLink", "AboutLink"],
  ["ContactLink", "ContactLink", "ContactLink", "ContactLink", "ContactLink"],
  ["LoginLink", "LoginLink", "LoginLink", "LoginLink", "LoginLink"],
];

const Header: React.FunctionComponent<IHeaderProps> = () => {
  const [menu, setMenu] = React.useState<boolean>(true);
  const [index, setIndex] = React.useState<number>(0);

  const handleMenu = (index: number) => {
    setIndex(index);
  };
  const handleOpen = () => {
    setMenu(!menu);
  };
  return (
    <Box className={styles.navi}>
      <Box
        className={styles.rectangleParent}
        sx={{
          backgroundColor: {
            xs: "#003057",
            lg: "white",
          },
        }}
      >
        <Box
          sx={{
            padding: "0.2rem",
            boxSizing: "border-box",
          }}
          component="div"
        >
          <img
            className={styles.frameChild}
            alt="logo"
            src="https://thumbs.dreamstime.com/b/technology-concept-business-logo-template-vector-illustration-network-creative-sign-digital-cryptocurrency-icon-technology-concept-113832666.jpg"
          />
        </Box>
        <Box
          sx={{
            display: {
              xs: "flex",
              lg: "none",
            },
          }}
        >
          <IconButton onClick={handleOpen}>
            {!menu ? (
              <MenuIcon
                sx={{
                  fontSize: "5rem",
                  color: "white",
                }}
              />
            ) : (
              <CloseIcon
                sx={{
                  fontSize: "5rem",
                  color: "white",
                }}
              />
            )}
          </IconButton>
        </Box>
        <Box
          className={styles.frameParent}
          sx={{ display: { xs: "none", lg: "flex" } }}
        >
          {menus.map((element, indexMenu) => {
            return (
              <Box
                className={styles.frameContainer}
                key={indexMenu}
                component="div"
              >
                <Box
                  component="div"
                  className={styles.ipsumWrapper}
                  onClick={(
                    event: React.MouseEvent<HTMLDivElement, MouseEvent>
                  ) => {
                    event.stopPropagation();
                    handleMenu(indexMenu);
                  }}
                  borderBottom={index === indexMenu ? "5px solid black" : ""}
                >
                  <b className={styles.ipsum}>{element}</b>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
