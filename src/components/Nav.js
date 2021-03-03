import React from 'react'

function Nav() {
  return (
    <div>
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <Typography className={classes.navHead} variant="h6">Medical Recommendation</Typography>
          <ul className={classes.navList}>
            <li>Home</li>
            <li>Services</li>
            <li>Departments</li>
            <li>Contact</li>
            <li>User</li>
            <li>Admin</li>
            <li>Make an Appointment</li>
          </ul>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Nav;
