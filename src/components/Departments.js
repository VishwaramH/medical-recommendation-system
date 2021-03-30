import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { deptData } from "../config/deptData";

const useStyles = makeStyles({
  root: {
    marginTop: 40,
    padding: 10,
    display: "flex",
    alignItems: "stretch",
  },
  container: {
    padding: 30,
  },
  card: {},
  image: {
    maxWidth: "100%",
    height: 300,
    objectFit: "fill",
  },
});

export default function Departments() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.container}>
      {deptData.map((item, index) => (
        <Grid key={index} item xs={12} md={4} className={classes.card}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                image={item.image}
                title="Contemplative Reptile"
                className={classes.image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {item.subheading}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
