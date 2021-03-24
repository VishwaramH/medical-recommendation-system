import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Redirect, NavLink } from "react-router-dom";
import UserLogin from "./UserLogin";
import { Paper } from "@material-ui/core";

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
}));

export default function SignUp() {
  const classes = useStyles();
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [receive, setReceive] = useState(false);
  const [signedUp, setSignedUp] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const registeredUser = {
      fullName,
      age,
      email,
      password,
      receive,
    };

    axios
      .post("http://localhost:8000/app/signup", registeredUser)
      .then((response) => {
        if (response.data.error) setErrors({ email: response.data.error });
        else if (response.data.success) {
          alert(response.data.success);
          setFullName("");
          setAge("");
          setEmail("");
          setPassword("");
          setReceive(false);
        }
      })
      .catch((error) => {
        console.log(errors);
      });
  };
  return (
    <div className={classes.container}>
      <CssBaseline />
      <Paper className={classes.bg} elevation={3}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fullName"
                  name="fullName"
                  variant="outlined"
                  required
                  fullWidth
                  label="Full Name"
                  autoFocus
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  type="number"
                  fullWidth
                  label="Age"
                  name="age"
                  autoComplete="age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  label="Email Address"
                  type="email"
                  name="email"
                  errors={Boolean(errors?.email)}
                  helperText={errors?.email}
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  type="password"
                  name="password"
                  label="Password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      value={receive}
                      color="primary"
                      onChange={(e) => setReceive(!receive)}
                    />
                  }
                  label="I want to receive notifications from this app via email"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <NavLink to="/signin">Already have an account? Sign in</NavLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </Paper>
    </div>
  );
}
