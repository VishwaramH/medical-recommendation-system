import React from "react";
import {
  AppBar,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "white",
    color: "black",
    boxShadow: "0 2px 10px -2px rgba(0,0,0,.2);",
  },
  navHead: {
    fontWeight: "bold",
  },
  navList: {
    margin: 0,
    display: "flex",
    "& li": {
      fontSize: 20,
      "list-style-type": "none",
      cursor: "pointer",
      padding: "20px",
    },
  },
  button: {
    marginTop: 16,
    marginLeft: 20,
    backgroundColor: "#1977CC",
    color: "white",
    boxShadow: "none",
    "&:hover": {
      backgroundColor: "#1977CC",
      boxShadow: "none",
    },
  },
  link: {
    textDecoration: "none",
    color: "black",
    "&:hover": {
      backgroundColor: "blue",
      color: "white",
      transition: "all .7s ease",
    },
  },
  buttonlink: {
    textDecoration: "none",
  },
});

function Nav() {
  const classes = useStyles();
  return (
    <nav className={classes.navbar}>
      <ul className={classes.navList}>
        <li className={classes.navHead} variant="h6">
          Medical Recommendation
        </li>
        <Link className={classes.link} to="/home">
          <li>Home</li>
        </Link>
        <Link className={classes.link} to="/services">
          <li>Services</li>
        </Link>
        <Link className={classes.link} to="/departments">
          <li>Departments</li>
        </Link>
        <Link className={classes.link} to="/contact">
          <li>Contact</li>
        </Link>
        <Link className={classes.link} to="/signup">
          <li>User</li>
        </Link>
        <Link className={classes.link} to="/admin">
          <li>Admin</li>
        </Link>
        <Link className={classes.buttonlink} to="/appointment">
          <Button className={classes.button} variant="contained">
            Make an Appointment
          </Button>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
