import { Container, Grid } from "@material-ui/core";
import React from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

const barState = {
  labels: [
    "Vishwaram H",
    "Meenakshi H",
    "Vijai K A",
    "Vishwa Vichu",
    "Raghunathan V",
  ],
  datasets: [
    {
      label: "Users",
      backgroundColor: "rgba(11, 121, 77, 0.603)",
      borderColor: "rgba(0,255,20,0.8)",
      borderWidth: 2,
      data: [20, 24, 18, 32, 40],
    },
  ],
};

const lineState = {
  labels: [
    "Vishwaram H",
    "Meenakshi H",
    "Vijai K A",
    "Vishwa Vichu",
    "Raghunathan V",
  ],
  datasets: [
    {
      label: "Duration(in hrs.)",
      fill: true,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [17, 20, 15, 19, 30],
    },
  ],
};

const pieState = {
  labels: [
    "Vishwaram H",
    "Meenakshi H",
    "Vijai K A",
    "Vishwa Vichu",
    "Raghunathan V",
  ],
  datasets: [
    {
      label: "Money (in Rs.)",
      backgroundColor: ["#B21F00", "#C9DE00", "#2FDE00", "#00A6B4", "#6800B4"],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [20, 24, 18, 32, 40],
    },
  ],
};

const doughnutState = {
  labels: ["Less than 18", "18 to 25", "26 to 40", "41 to 50", "Above 50"],
  datasets: [
    {
      label: "Money (in Rs.)",
      backgroundColor: [
        "rgba(255,0,0,0.6)",
        "rgba(0,255,0,0.6)",
        "rgba(0,0,255,0.6)",
        "rgba(12,2,4,0.6)",
        "rgba(1,23,255,0.6)",
      ],
      hoverBackgroundColor: [
        "#501800",
        "#4B5000",
        "#175000",
        "#003350",
        "#35014F",
      ],
      data: [20, 24, 30, 32, 50],
    },
  ],
};

class Analytics extends React.Component {
  render() {
    return (
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Bar
              className="bar"
              data={barState}
              options={{
                title: {
                  display: true,
                  text: "Recent logged in users",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Line
              className="line"
              data={lineState}
              options={{
                title: {
                  display: true,
                  text: "Number of hours spent in the app",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Pie
              data={pieState}
              options={{
                title: {
                  display: true,
                  text: "No of queries raised by the users",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Doughnut
              data={doughnutState}
              options={{
                title: {
                  display: true,
                  text: "Age categories",
                  fontSize: 20,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Analytics;
