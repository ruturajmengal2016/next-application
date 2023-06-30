"use client";
import * as React from "react";
import styles from "../../app/page.module.css";
import { Box } from "@mui/material";
interface IBottomProps {}

const Bottom: React.FunctionComponent<IBottomProps> = (props) => {
  const arr: string[] = ["Angular", "React", "Vue", "Laravel"];
  return (
    <div className={styles.frameParent8} style={{ padding: "0.5rem 0rem" }}>
      <Box
        className={styles.frameParent9}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
            lg: "row",
          },
          padding: "0rem 1rem",
          boxSizing: "border-box",
        }}
      >
        <div className={styles.rectangleGroup}>
          <div className={styles.illumMagnamAliquam}>PRODUCTS</div>
          <div className={styles.frameParent10}>
            <div className={styles.ipsumLoremParent}>
              {arr.map((ele, ind) => {
                return (
                  <div className={styles.ipsumLorem18} key={ind}>
                    {ele}
                  </div>
                );
              })}
            </div>
            <div className={styles.ipsumLoremParent}>
              {arr.map((ele, ind) => {
                return (
                  <div className={styles.ipsumLorem18} key={ind}>
                    {ele}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.illumMagnamAliquam}>USEFUL LINKS</div>
          <div className={styles.frameParent10}>
            <div className={styles.ipsumLoremParent}>
              {arr.map((ele, ind) => {
                return (
                  <div className={styles.ipsumLorem18} key={ind}>
                    {ele}
                  </div>
                );
              })}
            </div>
            <div className={styles.ipsumLoremParent}>
              {arr.map((ele, ind) => {
                return (
                  <div className={styles.ipsumLorem18} key={ind}>
                    {ele}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className={styles.quiaSoMinimaGroup}>
          <div className={styles.illumMagnamAliquam}>SOCIAL</div>
          <div className={styles.frameParent12}>
            <div className={styles.buttonContentSaferegularParent}>
              {arr.map((ele, ind) => {
                return (
                  <div className={styles.iconcontextuallinkGroup} key={ind}>
                    <img className={styles.iconcontextualshop} alt="" src="" />
                    <b className={styles.ipsum}>{ele}</b>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Box>
      <div className={styles.minimaAdForVitaeSitParent}>
        <div className={styles.illumMagnamAliquam}>Minima ad for vitae sit</div>
        <div className={styles.numquamEsseAliquipDoMagnGroup}>
          <div className={styles.ipsum}>Numquam. Esse aliquip do, magni.</div>
          <div className={styles.ipsum}>
            Aut proident and voluptate sunt quisquam so voluptate nemo
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
