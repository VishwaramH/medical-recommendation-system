import { makeStyles } from "@material-ui/styles";
import React, { useEffect } from "react";
import Departments from "./Departments";
import FeatureCards from "./FeatureCards";
import Hero from "./Hero";
import Services from "./Services";

const useStyles = makeStyles({});
function Home() {
  useEffect(() => {
    console.log("Sign in");
  }, []);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Hero />
    </div>
  );
}

export default Home;
