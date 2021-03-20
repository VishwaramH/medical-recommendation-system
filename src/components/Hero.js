import {
  Button,
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  hero: {
    backgroundImage: `url("/hero-bg.jpg")`,
    height: "100vh",
    width: "100%",
    position: "fixed",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  heading: {
    color: "black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 500,
  },
  button: {
    backgroundColor: "#1977CC",
    borderRadius: 9,
    color: "white",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#1977CC",
      boxShadow: "none",
    },
  },
});

function Hero() {
  const classes = useStyles();
  return (
    <Grid container className={classes.hero}>
      <Grid item xs={12} md={7} className={classes.heading}>
        <Typography variant="h3">
          We are a team of talented doctors who help in protecting lives
        </Typography>
        <Button className={classes.button} variant="contained">
          Get started
        </Button>
      </Grid>
    </Grid>
  );
}

export default Hero;
