import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandLess';
import { Box, Container } from '@material-ui/core';

import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    alignItems: "center",
    display: "flex",
    color: 'black',
    fontWeight: 'bolder',
    marginLeft: ".5rem"

  },
  quantity: {
    fontSize: theme.typography.pxToRem(12),
    fontWeight: 900,
    color: 'black',
    paddingTop: '.2rem'
  },
  customAccordion: {
    position: 'relative',
  },
  customExpandIcon: {
    position: 'absolute',
    right: 15,
    top: 0,
    color: 'black'
  },
  parentHeading: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '95%',
    color: 'black',

  },
  subHeading: {
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(15),
    color: 'black'
  },
  paragraph: {
    fontWeight: 300,
    fontSize: theme.typography.pxToRem(13),
    color: 'black'
  },
  footerBadge: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '98%',
    alignItems: 'center',
  },
  footerText: {
    color: 'red',
    fontSize: theme.typography.pxToRem(12),
  },
  trade: {
    fontSize: theme.typography.pxToRem(16),
    color: 'black',
    fontWeight: "bold"
  },
  Mep: {
    fontSize: theme.typography.pxToRem(15),
  },
  sameItems: {
    fontSize: theme.typography.pxToRem(16),
    color: 'black',
    fontWeight: "bold"
  },

}));


const StyledBadge = withStyles((theme) => ({
  badge: {

    fontSize: '1rem', // Increase this value to adjust the size
    minWidth: '.6rem', // Adjust this value to set the minimum width
    height: '.6rem', // Adjust this value to set the height
    // padding: '0.5rem'
  },
}))(Badge);
const StyledINTERIORBadge = withStyles((theme) => ({
  badge: {
    minWidth: '.9rem',
    height: '.9rem',
    backgroundColor: '#4CB6D9',

  },
}))(Badge);

export default function App() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [toggle, setToggle] = React.useState(true);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const togleHandler = () => {
    // alert('Please select')
    setToggle(!toggle);
  }
  console.log(toggle, "toggle--->");


  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
          className={classes.customAccordion}
        >
          <AccordionSummary
            classes={{ expandIcon: classes.customExpandIcon }}
            onClick={togleHandler}
            style={{
              transition: "1s"
            }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >

            {toggle && <Box
              style={{
                width: "100%"
              }}
            >

              <Box
                className={classes.parentHeading}
              >


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

                    MEP/GENERAL INTERIOR
                  </Typography>
                </Box>

                <Typography className={classes.quantity}>QTY 1</Typography>

              </Box>

              <Typography className={classes.subHeading}>

                Install New Master Lock 3-1/14 in. Set-your-own...</Typography>
              <Typography className={classes.paragraph}>

                Front Door, carport door, utility room deadbolt,exterior storage room keyed knob. Mounted Lock</Typography>

              <Box
                className={classes.footerBadge}
              >
                <Typography className={classes.footerText}>0% COMPLETE-ACTON REQUIRED</Typography>
                <StyledBadge color="secondary" variant="dot" />
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
                  Trade
                </Typography>
                <Typography className={classes.Mep}>MEP/General Interior</Typography>
                <Box>
                  <Box style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}>
                    <Box>
                      <Typography className={classes.sameItems}>QTY</Typography>
                      <Typography>1</Typography>
                    </Box>
                    <Box>
                      <Typography className={classes.sameItems}>ITEM</Typography>
                      <Typography>20243</Typography>
                    </Box>

                  </Box>
                  <Box>
                    <Typography className={classes.sameItems} >PRODUCT NAME</Typography>
                    <Typography>Install New Master Lock 3-1/14 in. Set-your-won combination Wall Lock Box, attach on grade door  frame or around  corner from  driveway(or as otherwise directed). Code set to Front door,car port door , utility room deadbolt. exterior storage room keyed knob. Mounted lock box code 1850. </Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                {/* starting from it */}
              </Box>
            </Box>
          </AccordionDetails>
        </Accordion>

      </div>
    </Container>
  );
}
