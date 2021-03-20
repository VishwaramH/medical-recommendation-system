import { Avatar, Button, Container, CssBaseline, Grid, TextField, Typography } from '@material-ui/core'
import { AssignmentInd } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles';
import React from 'react';

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
  paper: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: 20,
    backgroundColor: "blue",
  },
  form: {
    width: '100%', 
    marginTop: 50,
  },
  submit: {
    marginTop: 20,
  },
  googleColor: {
    marginTop: 20,
    backgroundColor: "white",
    width: "100%"
  },
  or: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 20
  },
  loginimage: {
    paddingTop: 100,
    paddingLeft: 50,
    width: 400,
    height: "300vh"
  }
});
function UserLogin() {
  const classes = useStyles();
  return (
    <div>
      <Container component="main" className={classes.root}>
        <CssBaseline />
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
            variant="contained"
            color="primary"
            className={classes.submit}
          >
              Sign in
          </Button>
            <Typography variant="h4" className={classes.or}>OR</Typography>
            <hr />
            <Button variant="contained" className={classes.googleColor}>Sign in with Google</Button>
        </form>
        </div>
        <div className={classes.loginimage}>
          <img src="https://fscomps.fotosearch.com/compc/CSP/CSP323/flat-health-care-and-medical-research-clipart__k37197370.jpg" alt="login" />
        </div>
        </Container>
    </div>
  )
}

export default UserLogin
