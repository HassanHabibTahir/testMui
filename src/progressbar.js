import React, { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import LinearProgress from "@material-ui/core/LinearProgress";
import { Box } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    height: 10,
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    height: 10,
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars({ percentage }) {
  const classes = useStyles();

  const [color, setColor] = useState('#EB5757'); // Default color



  useEffect(() => {
    if (percentage <= 25) {
      setColor('#EB5757'); // Red
    } else if (percentage <= 50) {
      setColor('#007AFF'); // Blue1
    } else if (percentage <= 75) {
      setColor('#2D9CDB'); // Blue2
    } else if (percentage <= 100) {
      setColor('#31CAAE'); // Green1
    } else {
      setColor('#6FCF97'); // Green2
    }
  }, [percentage]);
  console.log(percentage, "percentage", color);

  return (
    <div className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <BorderLinearProgress

          className={
            classes.progress
          }
          style={{
            transform: "rotate(-90deg)",
            width: 100,
            color: "red",
            // position: "absolute",
            left: "1.5rem",
            bottom: "1.5rem",
            // right: "2rem",
            // width: 200,
            // position: "fixed",
            // top: 190,
            // left: -50
          }}

          variant="determinate"
          // classes={{
          //   root: classes.progressBar,
          //   bar: { backgroundColor: 'red' },
          // }}

          value={+percentage}
        />
      </Box>
    </div>
  );
}
