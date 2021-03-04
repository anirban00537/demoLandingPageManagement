import "./Partner.css";
import client1 from "./client-1.png";
import client2 from "./client-2.png";
import client3 from "./client-3.png";
import client4 from "./client-4.png";
const Partner = () => {
  return (
    <div className="partner">
      <h5>OUR PARTNERS</h5>
      <div className="innerPartner">
        <div>
          <img src={client1} className="img-fluid" />
        </div>
        <div>
          <img src={client2} className="img-fluid" />
        </div>
        <div>
          <img src={client3} className="img-fluid" />
        </div>
        <div>
          <img src={client4} className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
