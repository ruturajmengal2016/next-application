import * as React from "react";
import styles from "../app/page.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Box } from "@mui/material";

const Merchandies: React.FunctionComponent = () => {
  const arr: number[] = [1, 2, 3];
  return (
    <Box
      className={styles.merchParent}
      sx={{
        flexWrap: "wrap",
        gap: "0.5rem",
      }}
    >
      {arr.map((ele) => {
        return (
          <div
            className={styles.merch}
            key={ele}
            style={{
              border: "1px solid black",
              backgroundImage: `url(https://cdn.pixabay.com/photo/2015/06/17/16/29/paper-bag-812728_1280.png)`,
              objectFit: "contain",
              backgroundPosition: "center",
              filter: `contrast(100%)`,
            }}
          >
            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              endIcon={<ArrowForwardIcon />}
            >
              Learn More
            </Button>
          </div>
        );
      })}
    </Box>
  );
};

export default Merchandies;
