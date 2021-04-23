import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact CONTACT">
      <div className="firstContact ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.1201461995975!2d90.3723540142975!3d23.778735593611668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b3340c1c91%3A0xfec009b60808d80a!2sICT%20Tower!5e0!3m2!1sen!2sbd!4v1614234244077!5m2!1sen!2sbd"
          width="100%"
          height="100%"
          styles="border:0px; background-color: #fff;"
          allowfullscreen=""
          className="mapICT"
          loading="lazy"
        ></iframe>
      </div>
      <div className=" secondContact">
        <div className="secMain">
          <div className="contactITem">
            <div className="roundContact">
              <i class="fas fa-phone cystomICON"></i>
            </div>
            <div className="contactDetailList">
              {" "}
              <h1 className="h1con">PHONE</h1>
              <p className="pcon">+880 1309 817440</p>
              <p className="pcon">+880 9611 677463</p>
            </div>
          </div>
          <div className="contactITem">
            <div className="roundContact ">
              <i class="cystomICON fas fa-envelope-square"></i>
            </div>
            <div className="contactDetailList">
              {" "}
              <h1 className="h1con">EMAIL</h1>
              <p className="pcon">admin@brainboxbd.com</p>
            </div>
          </div>
          <div className="contactITem">
            <div className="roundContact">
              {" "}
              <i class=" cystomICON fas fa-wifi"></i>
            </div>
            <div className="contactDetailList">
              {" "}
              <h1 className="h1con">WEBSITE</h1>
              <p className="pcon">brainboxbd.com</p>
            </div>
          </div>
          <div className="contactITem">
            <div className="roundContact">
              <i class=" cystomICON fas fa-map"></i>
            </div>
            <div className="contactDetailList">
              {" "}
              <h1 className="h1con">ADDRESS</h1>
              <p className="pcon">E-14/X, BCC Bhaban</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
