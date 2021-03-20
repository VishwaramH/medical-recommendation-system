import { makeStyles } from "@material-ui/styles";
import React from "react";
import Departments from "./Departments";
import FeatureCards from "./FeatureCards";
import Hero from "./Hero";
import Services from "./Services";

const useStyles = makeStyles({});
function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero />
    </div>
  );
}

export default Home;
