"use client";
import type { NextPage } from "next";
import styles from "./page.module.css";
import Bottom from "@/components/atoms/Bottom.tsx";
import Merchandies from "@/components/Merchandies.tsx";
import Header from "@/components/Header.tsx";
import Middle from "@/components/atoms/Middle.tsx";
import Official from "@/components/atoms/Official.tsx";
import MidHero from "@/components/atoms/Middle-hero.tsx";
import { Box, Typography } from "@mui/material";
import ControlledAccordions from "@/components/atoms/menu.tsx";
import React from "react";
import DeskMenu from "@/components/atoms/desktop-menu.tsx";
const Desktop: NextPage = () => {
  const [menu, setMenu] = React.useState<boolean>(true);
  const handleOpen = () => {
    setMenu(!menu);
  };
  const [index, setIndex] = React.useState<number>(0);

  const handleMenu = (index: number) => {
    setIndex(index);
  };
  return (
    <div className={styles.desktop}>
      <Box
        component="div"
        className={styles.groupParent}
        sx={{
          width: {
            xs: "100%",
            lg: "80%",
          },
        }}
      >
        <div
          className={styles.naviParent}
          onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            e.stopPropagation();
            handleOpen();
          }}
        >
          <Header
            handleOpen={handleOpen}
            menu={menu}
            handleMenu={handleMenu}
            index={index}
          />
          <ControlledAccordions open={menu} />
          <DeskMenu menu={menu} index={index} />
          <Box
            className={styles.proidentAnimNorContainer}
            sx={{
              fontSize: {
                xs: "1rem",
                sm: "2rem",
                lg: "3rem",
              },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: {
                  xs: "1.5rem",
                  lg: "3rem",
                },
              }}
            >
              Proident anim nor nulla iste.
            </Typography>
          </Box>
        </div>
        <Middle />
        <MidHero />
        <Official />
        <Merchandies />
      </Box>
      <Bottom />
    </div>
  );
};

export default Desktop;
