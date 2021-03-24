import React from "react";
import { Route, Switch } from "react-router-dom";
import AdminLogin from "./AdminLogin";
import Home from "./Home";
import Nav from "./Nav";
import SignUp from "./Signup";
import UserLogin from "./UserLogin";
import Contact from "./Contact";
import Departments from "./Departments";
import Services from "./Services";
import Appointment from "./Appointment";

function Main() {
  return (
    <div>
      <Nav />
      <Route path="/home" component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={UserLogin} />
      <Route path="/admin" component={AdminLogin} />
      <Route path="/contact" component={Contact} />
      <Route path="/departments" component={Departments} />
      <Route path="/services" component={Services} />
      <Route path="/appointment" component={Appointment} />
    </div>
  );
}

export default Main;
