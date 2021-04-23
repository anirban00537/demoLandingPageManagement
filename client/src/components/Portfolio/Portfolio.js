import "./Portfolio.css";
import { useState } from "react";
import AnimatedNumber from "react-animated-number";
import Slide from "react-reveal/Slide";

const Portfolio = () => {
  const formatValue = (value) => value.toFixed(parseInt(0));
  const [duration, setDuration] = useState(9000);
  return (
    <Slide bottom>
      <div
        className="portfolio"
        onMouseEnter={() => {
          setDuration(4000);
        }}
      >
        <div className="inportfolio">
          <i class="fas fascstm fa-chalkboard"></i>

          <h2>
            <AnimatedNumber
              component="text"
              value={parseInt(10)}
              stepPrecision={0}
              frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.25 })}
              duration={4000}
            />{" "}
            +
          </h2>
          <p>Tech Partner</p>
        </div>
        <div className="inportfolio">
          <i class="fas fascstm fa-clock"></i>
          <h2>
            <AnimatedNumber
              component="text"
              value={parseInt(4)}
              stepPrecision={0}
              frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.25 })}
              duration={duration}
            />{" "}
            +
          </h2>
          <p>Years Of Experience</p>
        </div>
        <div className="inportfolio">
          <i class="fas fascstm fa-globe-asia"></i>
          <h2>
            <AnimatedNumber
              component="text"
              value={parseInt(3)}
              stepPrecision={0}
              frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.25 })}
              duration={duration}
            />{" "}
            +
          </h2>
          <p>Countrys Served</p>
        </div>
        <div className="inportfolio">
          <i class="fas fascstm fa-code"></i>
          <h2>
            <AnimatedNumber
              component="text"
              value={parseInt(17)}
              stepPrecision={0}
              frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.25 })}
              duration={duration}
            />{" "}
            +
          </h2>
          <p>IT Professionals</p>
        </div>
        <div className="inportfolio">
          <i class="fas fascstm fa-check-double"></i>
          <h2>
            <AnimatedNumber
              component="text"
              value={parseInt(38)}
              stepPrecision={0}
              frameStyle={(perc) => (perc === 100 ? {} : { opacity: 0.25 })}
              duration={duration}
            />{" "}
            +
          </h2>
          <p>Project's Completed</p>
        </div>
      </div>
    </Slide>
  );
};

export default Portfolio;
