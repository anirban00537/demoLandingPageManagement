import "./Video.css";
import VideoPlayer from "react-video-js-player";
import video from "./WhatsApp Video 2021-03-11 at 12.22.19 AM (1).mp4";
import Fade from "react-reveal/Fade";

const Video = () => {
  const vid = video;
  return (
    <div className="mainVideo About ">
      <video autoplay="true" loop="true" muted className="vidStyle">
        <source src={vid} type="video/mp4" />
      </video>
      <Fade>
        <div className="vidDEta">
          <h1 className="h1Vid">WE ARE DIGITAL AGENCY</h1>
          <p className="pVid">
            Collaboration is the key to our organization. We are promising to
            execute your mission and Vision based on transparency and constant
            Software Solutions. Your success is a value we Share and a privilege
            we embrace
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Video;
