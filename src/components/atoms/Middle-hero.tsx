"use client";
import * as React from "react";
import styles from "../../app/page.module.css";
import { Box } from "@mui/material";
interface IMidHeroProps {}

const MidHero: React.FunctionComponent<IMidHeroProps> = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        flexDirection: {
          xs: "column-reverse",
          lg: "row",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "50%",
          },
        }}
      >
        <div
          style={{
            height: "19.6rem",
            width: "100%",
          }}
        >
          <img
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
            alt="kki"
            style={{ objectFit: "cover", height: "100%", width: "100%" }}
          />
        </div>
        <div className={styles.adipisicingUndeVelSoDoloreParent}>
          <b className={styles.adipisicingUndeVel}>
            Adipisicing unde vel so dolore, consequatur.
          </b>
          <div className={styles.frameWrapper8}>
            <div className={styles.frameParent2}>
              <div className={styles.iconcontextuallinkGroup}>
                <img
                  className={styles.iconcontextuallink1}
                  alt=""
                  src="/iconcontextuallink1.svg"
                />
                <b className={styles.ipsum}>Ipsum Lorem</b>
              </div>
              <div className={styles.iconcontextuallinkGroup}>
                <img
                  className={styles.iconcontextuallink1}
                  alt=""
                  src="/iconcontextuallink2.svg"
                />
                <b className={styles.ipsum}>Ipsum Lorem</b>
              </div>
              <div className={styles.iconcontextuallinkGroup}>
                <img
                  className={styles.iconcontextuallink1}
                  alt=""
                  src="/iconcontextuallink3.svg"
                />
                <b className={styles.ipsum}>Ipsum Lorem</b>
              </div>
            </div>
          </div>
        </div>
      </Box>
      <Box
        className={styles.frameParent3}
        sx={{
          width: {
            xs: "100%",
            lg: "50%",
          },
        }}
      >
        <div className={styles.numquamEsseAliquipDoMagnParent}>
          <div className={styles.numquamEsseAliquipContainer}>
            <span>{`Numquam. `}</span>
            <b className={styles.esseAliquipDo}>Esse aliquip do, magni.</b>
          </div>
          <div className={styles.minimaAdFor}>Minima ad for vitae sit</div>
          <div className={styles.ipsumLorem6}>Ipsum Lorem</div>
        </div>
        <div className={styles.frameItem} />
        <div className={styles.aspectRatioGroup}>
          <div className={styles.aspectRatio1}>
            <div className={styles.aspectRatioKeeperRotated1}>
              <div className={styles.dot0PixelCheat} />
              <div className={styles.dot0PixelCheat} />
            </div>
          </div>
          <div className={styles.adipisicingUndeVelSoDoloreParent}>
            <b className={styles.adipisicingUndeVel1}>
              Adipisicing unde vel so dolore, consequatur.
            </b>
            <div className={styles.frameParent4}>
              <div className={styles.frameWrapper9}>
                <div className={styles.iconcontextualemailParent}>
                  <img
                    className={styles.iconcontextualshop}
                    alt=""
                    src="/iconcontextuallink4.svg"
                  />
                  <b className={styles.ipsum}>Ipsum Lorem</b>
                </div>
              </div>
              <div className={styles.adipisicingUndeVel2}>
                Adipisicing unde vel so dolore, consequatur.
              </div>
              <div className={styles.frameWrapper10}>
                <div className={styles.iconcontextualemailParent}>
                  <div className={styles.iconcontextuallink5} />
                  <div className={styles.ipsumLorem6}>Ipsum Lorem</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default MidHero;
