"use client";
import * as React from "react";
import styles from "../../app/page.module.css";
import { Box, Typography } from "@mui/material";

const Middle: React.FunctionComponent = () => {
  return (
    <Box
      className={styles.minimModiYetOmnisNorQuiaParent}
      sx={{
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="body1"
        textAlign="center"
        sx={{ fontSize: { xs: "1.2rem", sm: "1.5rem", lg: "1rem" } }}
      >
        Minim modi yet omnis nor quia so minima.
      </Typography>
      <Box
        className={styles.frameGroup}
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <div className={styles.frameWrapper2}>
          <div className={styles.frameWrapper3}>
            <div className={styles.iconcontextualemailParent}>
              <img
                className={styles.iconcontextualemail}
                alt=""
                src="/iconcontextualemail.svg"
              />
              <b className={styles.ipsum}>Send Mail</b>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.frameWrapper3}>
            <div className={styles.iconcontextualemailParent}>
              <img
                className={styles.iconcontextualemail}
                alt=""
                src="/iconcontextuallink.svg"
              />
              <b className={styles.ipsum}>Add File</b>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper4}>
          <div className={styles.frameWrapper3}>
            <div className={styles.iconcontextualemailParent}>
              <img
                className={styles.iconcontextualemail}
                alt=""
                src="/iconcontextuallocation.svg"
              />
              <b className={styles.ipsum}>Location</b>
            </div>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Middle;
