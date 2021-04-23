import "./Partner.css";
import client1 from "./1.jpeg";
import client2 from "./2.png";
import client3 from "./3.png";
import client4 from "./4.png";
import client5 from "./5.png";
import client6 from "./6.png";

import client7 from "./7.png";
import client8 from "./8.png";
const Partner = () => {
  return (
    <div className="partner">
      <h2>OUR CLIENTS</h2>
      <div className="innerPartner">
        <div>
          <img src={client1} className="img-fluid imgPart1" />
        </div>
        <div>
          <img src={client2} className="img-fluid imgPart2" />
        </div>
        <div>
          <img src={client3} className="img-fluid imgPart3" />
        </div>

        <div>
          <img src={client5} className="img-fluid imgPart5" />
        </div>

        <div>
          <img src={client7} className="img-fluid imgPart7" />
        </div>
        <div>
          <img src={client8} className="img-fluid imgPart6" />
        </div>
      </div>
    </div>
  );
};

export default Partner;
