import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import LinearProgress from "@material-ui/core/LinearProgress";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({});

export default function CustomizedProgressBars({ percentage }) {
  const classes = useStyles();

  const [color, setColor] = useState("#EB5757");
  useEffect(() => {
    if (+percentage === 0) {
      setColor("#EB5757");
    } else if (percentage <= 25) {
      setColor("#007AFF");
    } else if (percentage <= 50) {
      setColor("#2D9CDB");
    } else if (percentage <= 75) {
      setColor("#31CAAE");
    } else if (percentage <= 100) {
      setColor("#6FCF97");
    }
  }, [percentage]);
  // if (percentage <= 25) {
  //   setColor("#EB5757");
  // } else if (percentage <= 50) {
  //   setColor("#007AFF");
  // } else if (percentage <= 75) {
  //   setColor("#2D9CDB");
  // } else if (percentage <= 100) {
  //   setColor("#31CAAE");
  // } else {
  //   setColor("#6FCF97");
  // }

  const linearProgressStyles = {
    containerStyles: {
      height: 13,
      width: "100%",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      transform: "rotate(-90deg)",
      position: "absolute",
      left: "1.5rem",
      bottom: "1rem",
    },
    fillerStyles: {
      height: "100%",
      width: `${+percentage === 0 ? 15 : +percentage}%`,
      backgroundColor: color,
      borderRadius: "inherit",
      textAlign: "right",
    },
    labelStyles: {
      padding: 5,
      color: "white",
      fontWeight: "bold",
    },
  };

  return (
    <div className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "relative",
        }}
      >
        <Box style={linearProgressStyles.containerStyles}>
          <Box style={linearProgressStyles.fillerStyles}></Box>
        </Box>
      </Box>
    </div>
  );
}
