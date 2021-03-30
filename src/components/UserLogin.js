import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { Redirect, NavLink } from "react-router-dom";
import { Paper } from "@material-ui/core";
import { AssignmentInd } from "@material-ui/icons";
import { auth, provider } from "../firebase/firebase";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  bg: {
    padding: 20,
    marginTop: 10,
    width: "40%",
    height: "max-content",
  },
  container: {
    backgroundImage: `url("https://fscomps.fotosearch.com/compc/CSP/CSP323/flat-health-care-and-medical-research-clipart__k37197370.jpg")`,
    height: "100vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
  },
  googleColor: {
    width: "100%",
  },
  or: {
    textAlign: "center",
  },
}));

function UserLogin() {
  const classes = useStyles();
  const [signedIn, setSignedIn] = useState(false);

  const googleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((res) => {
        setSignedIn(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div component="main" className={classes.container}>
      <CssBaseline />
      <Paper elevation={3} className={classes.bg}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AssignmentInd />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              href={signedIn ? "/contact" : "/signin"}
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
            <Typography variant="h6" className={classes.or}>
              OR
            </Typography>
            <hr />
            <Button
              // href={signedIn ? "/contact" : "/signin"}
              onClick={googleSignIn}
              variant="contained"
              className={classes.googleColor}
            >
              Sign in with Google
            </Button>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default UserLogin;
