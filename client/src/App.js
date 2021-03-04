import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Details from "./components/Detsils/Details";
import Video from "./components/Video/Video";
import Partner from "./components/Partner/Partner";
import Contact from "./components/Contact/Contact";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Details />
      <Video />
      <Partner />
      <Contact />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
