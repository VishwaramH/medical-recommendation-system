import { Button, Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
  // cards: {
  //   position: "relative"
  // }
})
function FeatureCards() {
  const classes = useStyles();
  return (
      <Grid container>
      <Card className={classes.cards}>
          <CardContent>
            <Typography variant="h4">
              Why do we need online medical recommendation system?
            </Typography>
            <Typography variant="body2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, excepturi odit vero voluptate dicta deserunt maxime voluptatibus minus eaque sequi iste est itaque consequuntur error, explicabo magni veniam, at provident!
            </Typography>
            <Button variant="contained" className={classes.button}>Learn More</Button>
          </CardContent>
        </Card>
        </Grid>
  )
}

export default FeatureCards
