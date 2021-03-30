import React, { useEffect, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { Redirect } from "react-router-dom";
import UserLogin from "./UserLogin";
import {
  FormControl,
  InputLabel,
  Select,
  TextareaAutosize,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
  textarea: {
    width: "100%",
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    padding: 10,
    borderRadius: 4,
    "&:focus": {
      outline: "none",
      border: "2px solid #3F51B5",
    },
  },
  select: {
    width: "100%",
  },
}));
function Contact() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [age, setAge] = useState("");
  const [query, setQuery] = useState("");

  const queryDetails = {
    email,
    category,
    age,
    query,
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/app/query", queryDetails)
      .then((response) => {
        alert("Email sent to the mail id. Please check");

        setEmail("");
        setCategory("");
        setAge("");
        setQuery("");
      })
      .catch(() => alert("Sorry! An error occured!"));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Fill out your query to get feedback
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                type="text"
                fullWidth
                label="Email"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl className={classes.select}>
                <InputLabel htmlFor="age-native-simple">
                  Select the category
                </InputLabel>
                <Select
                  native
                  inputProps={{
                    name: "age",
                    id: "age-native-simple",
                  }}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value={"None"}>None</option>
                  <option value={"General"}>General</option>
                  <option value={"Dermatology"}>Dermatology</option>
                  <option value={"Neurology"}>Neurology</option>
                  <option value={"Cardiology"}>Cardiology</option>
                  <option value={"Oncology"}>Oncology</option>
                  <option value={"Orthopaedics"}>Orthopaedics</option>
                  <option value={"Others"}>Others</option>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                type="number"
                fullWidth
                label="Age"
                name="age"
                autoComplete="age"
                query={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextareaAutosize
                aria-label="empty textarea"
                rowsMin={10}
                placeholder="Write your query here..."
                className={classes.textarea}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
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
            Send Query
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Contact;
