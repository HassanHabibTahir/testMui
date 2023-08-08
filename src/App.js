import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandLess";
import {
  Box,
  Button,
  Container,
  IconButton,
  MenuItem,
  Select,
} from "@material-ui/core";

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { itemsArray } from "./config";
import CustomizedProgressBars from "./progressbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(9.29),
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    color: "black",
    marginLeft: ".5rem",
  },
  quantity: {
    fontSize: theme.typography.pxToRem(11),
    // fontWeight: 900,
    // color: "black",
    // paddingTop: ".2rem",
    color: "red"
  },
  customAccordion: {
    position: "relative",
  },
  customExpandIcon: {
    position: "absolute",
    right: 15,
    top: 0,
    color: "black",
  },
  parentHeading: {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
    color: "black",
  },
  subHeading: {
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(13),
    color: "black",
  },
  AddNote: {
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(11),

    color: "black",
  },
  paragraph: {
    fontWeight: 300,
    width: "90%",
    fontSize: theme.typography.pxToRem(13),
    color: "black",
  },
  footerBadge: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    color: "red",
    fontSize: theme.typography.pxToRem(12),
  },
  trade: {
    fontSize: theme.typography.pxToRem(9.29),
    fontWeight: 700,
    color: 'black',

  },
  Mep: {
    fontSize: theme.typography.pxToRem(1),
  },
  sameItems: {
    fontSize: theme.typography.pxToRem(11),
    color: 'black',
    fontWeight: 700
  },
  sameItemsValue: {
    fontSize: theme.typography.pxToRem(10),
    color: 'black',
    fontWeight: 600
  },
  ItemHeading: {
    fontSize: theme.typography.pxToRem(9.29),
    fontWeight: "700",
    alignItems: "center",
    display: "flex",
    color: "black",
    paddingTop: '.2rem'
  },
  selectComponent: {

    fontWeight: 600,
    color: "#4CB6D9",
    fontSize: theme.typography.pxToRem(11),

  },
  addButton: {
    fontWeight: 700,
    height: theme.typography.pxToRem(13),
    fontSize: theme.typography.pxToRem(11),
    color: "black",
    margin: "0px",
    padding: "0px",
  },
  Muiselect: {
    outline: "none",
  },
  progressBar: {
    height: "75%",
    width: 12,
    borderRadius: 50,
    flexDirection: "column-reverse",
    backgroundColor: "rgba(255, 255, 255)"
  }

}));

const StyledBadge = withStyles((theme) => ({
  badge: {
    fontSize: "1rem", // Increase this value to adjust the size
    minWidth: ".6rem", // Adjust this value to set the minimum width
    height: ".6rem", // Adjust this value to set the height
    // padding: '0.5rem'
  },
}))(Badge);
const StyledINTERIORBadge = withStyles((theme) => ({
  badge: {
    minWidth: ".9rem",
    height: ".9rem",
    backgroundColor: "#4CB6D9",
  },
}))(Badge);

export default function App() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [toggle, setToggle] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [index, setIndex] = React.useState()
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleButtonClick = () => {
    // Handle button click here
  };

  const togleHandler = (index, toggle) => {
    // alert('Please select')(
    if (toggle) {
      setIndex(index)

    } else {
      setIndex(-1)
    }
    setToggle(!toggle);
  }

  console.log(index, "index")

  return (
    <Container maxWidth="sm">
      {itemsArray.map(({ product_name, amount, id, product_description, quantity, status, trade }, _index) =>
        <div key={_index} className={classes.root}>
          <Accordion
            expanded={expanded === `panel${_index + 1}`}
            onChange={handleChange(`panel${_index + 1}`)}
            className={classes.customAccordion}
          >
            <AccordionSummary
              classes={{ expandIcon: classes.customExpandIcon }}
              onClick={() => togleHandler(_index, toggle)}
              style={{
                transition: "1s"
              }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >

              {index !== _index && <Box
                style={{
                  width: "100%",
                }}
              >
                <Box className={classes.parentHeading}>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <StyledINTERIORBadge color="secondary" variant="dot" />
                    <Typography className={classes.heading}>
                      {product_name}
                    </Typography>
                  </Box>

                  <Typography className={classes.quantity}>QTY 1</Typography>
                </Box>

                <Typography className={classes.subHeading}>
                  Install New Master Lock 3-1/14 in. Set-your-own...
                </Typography>
                <Typography className={classes.paragraph}>
                  Front Door, carport door, utility room deadbolt,exterior storage
                  room keyed knob. Mounted Lock
                </Typography>

                <Box className={classes.footerBadge}>
                  <Typography className={classes.footerText}>
                    0% COMPLETE-ACTON REQUIRED
                  </Typography>
                  <Box
                    className={classes.progressBar}
                  >

                  </Box>
                  <CustomizedProgressBars progress={status.progress} />
                  {/* <StyledBadge color="secondary" variant="dot" /> */}
                </Box>





              </Box>}

            </AccordionSummary>
            <AccordionDetails>
              <Box
                style={{
                  width: '100%',
                }}
              >
                <Box>
                  <Typography className={classes.trade}>
                    {trade}
                  </Typography>
                  <Typography className={classes.Mep}>MEP/General Interior</Typography>
                  <Box>
                    <Box style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}>
                      <Box>
                        <Typography className={classes.sameItems}>QTY</Typography>
                        <Typography className={classes.sameItemsValue}>1</Typography>
                      </Box>
                      <Box>
                        <Typography className={classes.sameItems}>ITEM</Typography>
                        <Typography className={classes.sameItemsValue}>{id}</Typography>
                      </Box>

                    </Box>
                    <Box>
                      <Typography className={classes.sameItems} >PRODUCT NAME</Typography>
                      <Typography className={classes.paragraph}>Install New Master Lock 3-1/14 in. Set-your-won combination Wall Lock Box, attach on grade door  frame or around  corner from  driveway(or as otherwise directed). Code set to Front door,car port door , utility room deadbolt. exterior storage room keyed knob. Mounted lock box code 1850. </Typography>
                    </Box>
                  </Box>
                </Box>


                <Typography className={classes.sameItems}>Clocked out</Typography>
                <Typography className={classes.sameItemsValue}>Not available</Typography>
                <Box>

                  <Typography className={classes.ItemHeading}>
                    ITEM COMPLETION STATUS
                  </Typography>


                  <Box
                    style={{
                      width: "100%",
                      height: 40,
                      borderRadius: "5px",
                      color: "#4CB6D9",
                      backgroundColor: "#F7F7F7",
                      padding: "12px",
                    }}
                  >
                    <Typography
                      className={classes.selectComponent}
                    >
                      Select
                    </Typography>
                  </Box>
                  <Box
                    style={{
                      margin: "8px 6px",
                    }}
                  >
                    <Typography className={classes.heading}>
                      ADDITIONAL COMMENTS
                    </Typography>
                    <Box
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "15px",
                      }}
                    >
                      <AddCircleIcon
                        onClick={handleButtonClick}
                        style={{
                          color: "#4CB6D9",
                          cursor: "pointer",
                        }}
                      />
                      <Typography className={classes.AddNote}>
                        Add Note
                      </Typography>
                    </Box>
                  </Box>
                  <Typography className={classes.heading}>PHOTOS</Typography>
                  <Box
                    style={{
                      width: "100%",
                      height: 50,
                      borderRadius: "5px",
                      color: "#4CB6D9",
                      backgroundColor: "#F7F7F7",
                      padding: "5px 10px",
                    }}
                  >
                    <Typography
                      style={{ paddingLeft: "15px" }}
                      className={classes.paragraph}
                    >
                      Photo 1
                    </Typography>
                    <Button
                      className={classes.addButton}
                    >
                      Add
                    </Button>
                  </Box>
                </Box>
              </Box>
            </AccordionDetails>
          </Accordion>
        </div>)
      }


    </Container >
  );
}
