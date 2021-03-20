import { Grid } from "@material-ui/core";
import React from "react";
import { Route } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import Home from "./Home";
import Nav from "./Nav";
import SignUp from "./Signup";
import UserLogin from "./UserLogin";

function Main() {
  return (
    <div>
      <Nav />
      <Route path="/home" component={() => <Home />} />
      <Route path="/signup" component={() => <SignUp />} />
      <Route path="/signin" component={() => <UserLogin />} />
      <Route path="/admin" component={() => <AdminLogin />} />
    </div>
  );
}

export default Main;
