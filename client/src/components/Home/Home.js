import "./Home.css";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="main">
      <Slide bottom>
        <div className="first">
          <p className="colorBlueFONT">WELCOME TO BRAINBOXBD</p>
          <h1 className="homeH1">LETS MAKE PROJECT BUILDING EASY PROCESS</h1>
          <p className="homeP">
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages,
          </p>
          <button className="btn_Home btn">LEARN MORE</button>
        </div>
      </Slide>
      <Slide bottom>
        <div className="second">
          <img
            className="img-fluid"
            src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849822_960_720.jpg"
            alt="Responsive image"
          />
        </div>
      </Slide>
    </div>
  );
};

export default Home;
