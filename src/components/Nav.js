import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'white',
    color: 'black',
  },
  navHead: {
    fontWeight: 'bold',
  },
  navList: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& li': {
      "list-style-type": 'none',
      cursor: "pointer",
      padding: "10px 30px",
      "&:hover": {
        borderBottom: "2px solid blue",
        transition: "all .7s ease"
      }
    }
  },
  button: {
    
    backgroundColor: "#1977CC",
    color: "white",
      boxShadow: "none",
    "&:hover": {
      backgroundColor: "#1977CC",
      boxShadow: "none"
    }
  }
});

function Nav() {
  
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.navHead} variant="h6">Medical Recommendation</Typography>
          <ul className={classes.navList}>
            <li>Home</li>
            <li>Services</li>
            <li>Departments</li>
            <li>Contact</li>
            <li>User</li>
            <li>Admin</li>
            <Button className={classes.button} variant="contained">Make an Appointment</Button>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav;
