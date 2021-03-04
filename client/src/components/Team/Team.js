import "./Team.css";
import Fade from "react-reveal/Fade";

const Team = () => {
  return (
    <div className="team">
      <h1>OUR TEAM</h1>
      <div className="innerTeam">
        <Fade right>
          <div className="teamItam">
            <img
              src="https://cdn.corporatefinanceinstitute.com/assets/professional-woman-1024x683.jpg"
              className="imageTeam img-fluid"
            />
            <h4 className="teamItamh1">Iran Khan</h4>
            <p className="teamItamp">Projet Manager</p>
          </div>
          <div className="teamItam">
            <img
              src="https://cdn.corporatefinanceinstitute.com/assets/professional-woman-1024x683.jpg"
              className="imageTeam img-fluid"
            />
            <h4 className="teamItamh1">Iran Khan</h4>
            <p className="teamItamp">Projet Manager</p>
          </div>
          <div className="teamItam">
            <img
              src="https://cdn.corporatefinanceinstitute.com/assets/professional-woman-1024x683.jpg"
              className="imageTeam img-fluid"
            />
            <h4 className="teamItamh1">Iran Khan</h4>
            <p className="teamItamp">Projet Manager</p>
          </div>
          <div className="teamItam">
            <img
              src="https://cdn.corporatefinanceinstitute.com/assets/professional-woman-1024x683.jpg"
              className="imageTeam img-fluid"
            />
            <h4 className="teamItamh1">Iran Khan</h4>
            <p className="teamItamp">Projet Manager</p>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Team;
