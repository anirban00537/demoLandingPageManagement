import "./Video.css";
import VideoPlayer from "react-video-js-player";
import video from "./Google.mp4";
import Fade from "react-reveal/Fade";

const Video = () => {
  const vid = video;
  return (
    <div className="mainVideo ">
      <video autoplay="true" loop="true" muted className="vidStyle">
        <source src={vid} type="video/mp4" />
      </video>
      <Fade>
        <div className="vidDEta">
          <h1 className="h1Vid">WE ARE DIGITAL AGENCY</h1>
          <p className="pVid">
            Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam
            sequi quod iusto facilis officiis nobis sit quis molestias
            asperiores rem, blanditiis! Commodi exercitationem vitae deserunt
            qui nihil ea, tempore et quam natus quaerat doloremque.
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Video;
