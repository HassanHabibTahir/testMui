import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Box } from "@material-ui/core";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export default function CustomizedProgressBars({ progress }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <BorderLinearProgress
          style={{
            transform: "rotate(-90deg)",
            width: 100,
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
          value={+progress}
        />
      </Box>
    </div>
  );
}
