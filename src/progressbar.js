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

  const linearProgressStyles = {
    containerStyles: {
      height: 15,
      width: '100%',
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      transform: "rotate(-90deg)",
      position: "absolute",
      left: "1.5rem",
      bottom: "1.5rem",
    },
    fillerStyles: {
      height: '100%',
      width: `${percentage}%`,
      backgroundColor: color,
      borderRadius: 'inherit',
      textAlign: 'right'
    },
    labelStyles: {
      padding: 5,
      color: 'white',
      fontWeight: 'bold'
    }

  };


  return (
    <div className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
          position: "relative"
        }}
      >
        <Box style={linearProgressStyles.containerStyles}>
          <Box style={linearProgressStyles.fillerStyles}>

          </Box>
        </Box>


      </Box>
    </div>
  );
}
