import "./Home.css";
import Slide from "react-reveal/Slide";

const Home = () => {
  return (
    <div className="main Home">
      <Slide bottom>
        <div className="first">
          <p className="colorBlueFONT">WELCOME TO BRAINBOXBD</p>
          <h1 className="homeH1">LETS MAKE PROJECT BUILDING A EASY PROCESS</h1>
          <p className="homeP">
            We develop customized software that is entirely based on the user's
            requirements. Industries: E-commerce, Garments/Textile, IT &
            Telecommunication, Information Technology (IT), Engineer/Architects,
            Accounting/Finance, NGO/Development, Medical/Pharma, Gen Mgt/Admin,
            Hospital/ Diagnostic Center, Archi./Engg./Construction, Wholesale/
            Retail/ Export-Import, HR/Org. Development.
          </p>
          <button className="btn_Home btn">LEARN MORE</button>
        </div>
      </Slide>
      <Slide bottom>
        <div className="second">
          <img
            className="img-fluid"
            src="https://cdn.pixabay.com/photo/2015/05/15/14/22/conference-room-768441_960_720.jpg"
            alt="Responsive image"
          />
        </div>
      </Slide>
    </div>
  );
};

export default Home;
