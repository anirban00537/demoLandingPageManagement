import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Details from "./components/Detsils/Details";
import Video from "./components/Video/Video";
import Partner from "./components/Partner/Partner";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login";
import Homeadmin from "./components/Login/Homeadmin";
import Portfolio from "./components/Portfolio/Portfolio";
import Industry from "./Industry/Industry";
function Homes() {
  return (
    <div className="App">
      <Navbar />
      <Home />

      <Details />
      <Video />
      <Partner />
      <Contact />
      {/* <Team /> */}
      <Portfolio />
      <Industry />
      <Footer />
    </div>
  );
}
function Routers() {
  return (
    <Switch>
      <Route exact path="/" component={Homes} />
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Homeadmin} />
    </Switch>
  );
}

function App() {
  return (
    <div>
      <Router>
        <Routers />
      </Router>
    </div>
  );
}

export default App;
