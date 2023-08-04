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
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
  }
  // AccordionSummary: {
  //   '&.MuiAccordionSummary-expandIcon': {
  //     position: "absolute",
  //     right: "0rem",
  //     top: "0rem",

  //   }
  // }
  // 
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

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}
          className={classes.customAccordion}
        >
          <AccordionSummary
            classes={{ expandIcon: classes.customExpandIcon }}

            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >

            <Box
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





            </Box>

          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
              maximus est, id dignissim quam.
            </Typography>
          </AccordionDetails>
        </Accordion>

      </div>
    </Container>
  );
}
