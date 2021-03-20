import { Grid } from "@material-ui/core";
import "./App.css";
import FeatureCards from "./components/FeatureCards";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import SignUp from "./components/Signup";
import UserLogin from "./components/UserLogin";
import { BrowserRouter } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
