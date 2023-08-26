import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandLess";
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import { Box, Button, Container, IconButton, MenuItem, Select } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import Badge from "@material-ui/core/Badge";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { itemsArray } from "./DummyData";
import CustomizedProgressBars from "./progressbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "&.Mui-disabled": {
      background: "#eaeaea",
      color: "#c0c0c0",


    },
  },
  additional: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: 700,
    alignItems: "center",
    display: "flex",
    color: "black",
    marginLeft: ".5rem",
    marginTop: ".9rem",
  },
  photos: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: 700,
    alignItems: "center",
    display: "flex",
    color: "black",
    marginLeft: ".5rem",
    marginTop: ".9rem",
  },
  heading: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: 700,
    alignItems: "center",
    display: "flex",
    color: "black",
    marginLeft: ".5rem",
    // marginTop: '.7rem'
  },
  quantity: {
    fontSize: "9.6px",
    color: "red",
  },
  customAccordion: {
    margin: "10px 0",
    "& .MuiAccordion-root": {
      "&:not(:last-child)": {
        marginBottom: 0,
      },
    },
    customAccordionSummaryContent: {
      "&.Mui-expanded": {
        margin: 0,
        backgroundColor: "transparent",
      },
    },

    position: "relative",
    marginBottom: "5px",
    "&.Mui-expanded": {
      minHeight: 40,
    },
    "&.MuiAccordionSummary-root": {
      minHeight: 10,
    },
    "&.MuiAccordionSummary-content.Mui-expanded": {
      margin: "0px 0",
      marginLeft: ".5rem",
      "&.MuiIconButton-label": {
        marginLeft: ".5rem"
      }
    },

  },

  customExpandIcon: {
    transition: "none",
    backgroundColor: "transparent !important",
    position: "absolute",
    padding: " 7px 8px 8px 0px",
    right: "2px",
    color: "black",
    margin: 0,
    marginLeft: ".5rem",
    "&.Mui-disabled": {
      background: "#eaeaea",
      color: "#c0c0c0"
    }
  },
  customIconButtonLabel: {
    marginLeft: "1rem"
  },
  parentHeading: {
    display: "flex",
    justifyContent: "space-between",
    width: "95%",
    color: "black",
  },
  subHeading: {
    fontWeight: 400,
    fontSize: "13px",
    color: "black",
  },
  AddNote: {
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(11),
    color: "black",
  },
  paragraph: {
    fontWeight: 600,
    fontSize: theme.typography.pxToRem(12),
    width: "90%",
    color: "black",
  },
  bottomParagraph: {
    fontWeight: 400,
    fontSize: theme.typography.pxToRem(11),
    width: "90%",
  },
  footerBadge: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  footerText: {
    color: "red",
    fontSize: "9.6px",
  },
  trade: {
    fontSize: theme.typography.pxToRem(9.29),
    fontWeight: 700,
    color: "black",
    paddingBottom: ".2rem",
  },
  Mep: {
    fontSize: theme.typography.pxToRem(11),
  },
  quantityItem: {
    fontSize: theme.typography.pxToRem(11),
    color: "black",
    fontWeight: 700,
  },
  sameItems: {
    fontSize: theme.typography.pxToRem(11),
    color: "black",
    fontWeight: 700,
  },
  sameItemsValue: {
    fontSize: theme.typography.pxToRem(10),
    color: "black",
    fontWeight: 700,
  },
  ItemHeading: {
    fontSize: theme.typography.pxToRem(10),
    fontWeight: 700,
    alignItems: "center",
    display: "flex",
    color: "black",
    paddingTop: "1rem",
  },
  selectComponent: {
    fontWeight: 600,
    color: "#4CB6D9",
    fontSize: theme.typography.pxToRem(11),
  },
  addButton: {
    fontWeight: 700,
    height: theme.typography.pxToRem(13),
    fontSize: theme.typography.pxToRem(10),
    color: "#4CB6D9",
    background: "#EDEDED",
    padding: "12px 5px",
    // marginLeft: "5px",
    // marginBottom: "5px",
    margin: "5px",
  },
  Muiselect: {
    outline: "none",
  },
  progressBar: {
    height: "100%",
    width: 60,
    borderRadius: 50,
    flexDirection: "column-reverse",
    backgroundColor: "rgba(255, 255, 255)",
  },
  selectBox: {
    // Remove the padding for the icon
    paddingRight: "0",
    // Hide the SVG icon
    "& .MuiSvgIcon-root": {
      display: "none",
    },
    "&:before": {
      display: "none", // Hide the underline
    },
    "&:after": {
      display: "none", // Hide the underline
    },
    "& > .MuiSelect-root": {
      paddingRight: "0", // Remove space for the icon
    },
    width: "100%",
    height: 50,
    fontWeight: 700,
    color: "#4CB6D9",
    backgroundColor: "#F7F7F7",
    borderRadius: "5px",
    paddingLeft: "15px",
    boxShadow: "none",
    fontSize: theme.typography.pxToRem(11),
  },
  menuItem: {
    fontSize: theme.typography.pxToRem(10),
  },

  customAccordionSummaryRoot: {
    alignItems: "flex-start !important",
    "&.Mui-expanded": {
      minHeight: "5px",
      height: "0rem",
      "&.MuiIconButton-label": {
        marginLeft: ".5rem"
      }
    },
  },
  expandIcon: {
    marginLeft: '-0.1rem !important',
  },
}));

const StyledINTERIORBadge = withStyles((theme) => ({
  badge: {
    minWidth: ".9rem !important",
    height: ".9rem !important",
    backgroundColor: "#4CB6D9 !important",
  },
}))(Badge);

export default function App() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [toggle] = React.useState(true);
  const [selectStatus, setSelectStatus] = React.useState("");
  const [index, setIndex] = React.useState(-1);

  const [fileArray, setFileArray] = React.useState([]);

  const handleAddFile = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFileArray((prevArray) => [...prevArray, selectedFile]);
    }
  };
  const handleRemoveFile = (index) => {
    const newArray = [...fileArray];
    newArray.splice(index, 1);
    setFileArray(newArray);
  };
  const handleStatusChange = (event) => {
    setSelectStatus(event.target.value);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const handleButtonClick = () => {
    // Handle button click here
  };

  const togleHandler = (_index, toggle) => {
    if (index === _index) {
      setIndex(-1);
    } else {
      setIndex(_index);
    }
  };

  console.log(index, "index");

  return (
    <Container maxWidth="sm">
      {itemsArray.map(
        (
          {
            productName,
            amount,
            id,
            productDescription,
            quantity,
            status,
            trade,
          },
          _index
        ) => (
          <div key={_index} className={classes.root}>
            <Accordion
              TransitionProps={{ unmountOnExit: true }}
              expanded={expanded === `panel${_index + 1}`}
              onChange={handleChange(`panel${_index + 1}`)}
              className={classes.customAccordion}
              disableGutters={true}
            >
              <AccordionSummary
                classes={{
                  root: classes.customAccordionSummaryRoot,
                  content: classes.customAccordionSummaryContent,
                  expandIcon: classes.customExpandIcon,
                  label: classes.customIconButtonLabel
                }}
                onClick={() => togleHandler(_index, toggle)}
                style={{
                  transition: "1s",
                }}
                expandIcon={<ExpandLessIcon className={classes.expandIcon} />}

              // aria-controls="panel1bh-content"
              // id="panel1bh-header"
              >

                {index !== _index && (
                  <Box
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
                          {productName}
                        </Typography>
                      </Box>

                      <Typography className={classes.quantity}>
                        QTY {quantity}
                      </Typography>
                    </Box>
                    <Typography className={classes.subHeading}>
                      Install New Master Lock 3-1/14 in. Set-your-own...
                      combinations
                    </Typography>
                    <Typography className={classes.paragraph}>
                      Front Door, carport door, utility room deadbolt,exterior
                      storage room keyed knob. Mounted Lock
                    </Typography>

                    <Box className={classes.footerBadge}>
                      <Typography className={classes.footerText}>
                        0% COMPLETE-ACTON REQUIRED
                      </Typography>
                      <Box className={classes.progressBar}>
                        <CustomizedProgressBars percentage={status.progress} />
                      </Box>
                    </Box>
                  </Box>
                )}
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  style={{
                    width: "100%",
                  }}
                >
                  <Box>
                    <Typography className={classes.trade}>{trade}</Typography>
                    <Typography className={classes.Mep}>
                      MEP/General Interior
                    </Typography>
                    <Box>
                      <Box
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box>
                          <Typography className={classes.quantityItem}>
                            QTY
                          </Typography>
                          <Typography className={classes.sameItemsValue}>
                            {quantity}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography className={classes.sameItems}>
                            ITEM
                          </Typography>
                          <Typography className={classes.sameItemsValue}>
                            {id}
                          </Typography>
                        </Box>
                      </Box>
                      <Box>
                        <Typography className={classes.sameItems}>
                          PRODUCT NAME
                        </Typography>
                        <Typography className={classes.paragraph}>
                          Install New Master Lock 3-1/14 in. Set-your-won
                          combination Wall Lock Box, attach on grade door frame
                          or around corner from driveway(or as otherwise
                          directed). Code set to{" "}
                        </Typography>
                        <Typography className={classes.bottomParagraph}>
                          Front door,car port door , utility room deadbolt.
                          exterior storage room keyed knob. Mounted lock box
                          code 1850.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* <Typography className={classes.sameItems}>
                    Clocked out
                  </Typography>
                  <Typography className={classes.sameItemsValue}>
                    Not available
                  </Typography> */}
                  <Box>
                    <Typography className={classes.ItemHeading}>
                      ITEM COMPLETION STATUS
                    </Typography>

                    <Select
                      className={classes.selectBox}
                      inputProps={{ "aria-label": "Without label" }}
                      value={selectStatus}
                      onChange={handleStatusChange}
                      displayEmpty
                      renderValue={(value) => (value === "" ? "Select" : value)}
                    >
                      <MenuItem className={classes.menuItem} value="">
                        Select
                      </MenuItem>
                      <MenuItem className={classes.menuItem} value={"active"}>
                        Active
                      </MenuItem>
                      <MenuItem className={classes.menuItem} value={"inactive"}>
                        Inactive
                      </MenuItem>
                    </Select>

                    {/* <Box
                        style={{
                          width: "100%",
                          height: 40,
                          borderRadius: "5px",
                          color: "#4CB6D9",
                          backgroundColor: "#F7F7F7",
                          padding: "12px",
                        }}
                      >
                        <Typography className={classes.selectComponent}>
                          Select
                        </Typography>
                      </Box> */}
                    <Box
                      style={{
                        margin: "8px 6px",
                      }}
                    >
                      <Typography
                        className={classes.additional}
                        style={{
                          marginLeft: "0",
                        }}
                      >
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
                    <Typography className={classes.photos}>PHOTOS</Typography>
                    <Box
                      style={{
                        width: "100%",
                        height: "auto",
                        borderRadius: "5px",
                        backgroundColor: "#F7F7F7",
                        padding: "3px 10px",
                      }}
                    >
                      {/* <Button className={classes.addButton}>Add</Button>
                      <Typography
                        style={{ paddingLeft: "8px" }}
                        className={classes.AddNote}
                      >
                        Photo 1
                      </Typography> */}
                      <Box>
                        <input
                          type="file"
                          style={{ display: "none" }}
                          id="fileInput"
                          onChange={handleAddFile}
                        />
                        <label htmlFor="fileInput">
                          <Button
                            className={classes.addButton}
                            component="span"
                          >
                            Add
                          </Button>
                        </label>

                        {fileArray?.map((fileName, index) => (
                          <li
                            key={index}
                            style={{
                              background: "#fff",
                              margin: "8px 0px",
                              listStyleType: "none",
                              padding: "10px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <Typography
                              style={{ paddingLeft: "8px" }}
                              className={classes.AddNote}
                            >
                              {fileName?.name}
                            </Typography>
                            <CloseIcon
                              style={{ marginLeft: "auto", cursor: "pointer" }}
                              onClick={() => handleRemoveFile(index)}
                            />
                          </li>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </AccordionDetails>
            </Accordion>
          </div>
        )
      )}
    </Container>
  );
}
