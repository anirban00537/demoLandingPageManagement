import { useState } from "react";
import "./Details.css";
import Zoom from "react-reveal/Zoom";
import toast from "react-simple-toasts";
import { Button, Modal } from "react-bootstrap";
import { createCustomerContact } from "../../Api";
import im1 from "./pen-4337524_1920.jpg";
import im2 from "./code-1839406_1920.jpg";
import im3 from "./computer-4795762_1920.jpg";
import im4 from "./desk-791178_1920.jpg";
import im5 from "./robot-3010309_1920 (1).jpg";
import im6 from "./clouds-1845517_1920.jpg";
import im7 from "./office-820390_1920.jpg";

const Details = () => {
  // const [imgindex, setImg] = useState(0);
  const imgs = [im1, im2, im3, im4, im5, im6, im7];
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  const [cc, setCC] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
    date: dd,
    month: mm,
    year: yyyy,
  });

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (e) => {
    createCustomerContact(cc).then(() => {
      setCC({
        name: "",
        email: "",
        message: "",
        mobile: "",
        date: dd,
        month: mm,
        year: yyyy,
      });
      return toast("Successfully Sunmitted");
    });
  };
  const [doc, setDoc] = useState({
    imgindex: 0,
    title: "IT strategy consultancy",
    desc:
      "We help you identify and validate new expansion opportunities for your business. By analyzing your current state of technology and desired business outcomes, we help you design your technology adoption roadmap with clear milestones. This accelerates your technology adoption and improves your application development efficiency.",
  });

  return (
    <div className="mainDetails SERVICE">
      <div className="firstDetails">
        <Zoom>
          <div className="makeFlexStart">
            <p
              onMouseEnter={() => {
                setDoc({
                  imgindex: 0,
                  title: "IT strategy consultancy",
                  desc:
                    "We help you identify and validate new expansion opportunities for your business. By analyzing your current state of technology and desired business outcomes, we help you design your technology adoption roadmap with clear milestones. This accelerates your technology adoption and improves your application development efficiency.",
                });
              }}
            >
              {" "}
              IT consultancy
            </p>
            <p
              onMouseEnter={() => {
                setDoc({
                  imgindex: 1,
                  title: "Web Development",
                  desc: `"Web design is important because it impacts how your audience perceives your brand. The impression you make on them can either get them to remain on your page and learn about your business or leave your page and turn to a competitor. A good web design helps you keep your leads on your page."

`,
                });
              }}
            >
              Web Development
            </p>
            <p
              onMouseEnter={() => {
                setDoc({
                  imgindex: 2,
                  title: "Mobile Application",
                  desc: `You may gain access to nearly every type of online platforms by developing your apps. Develop apps will help reach into marketplaces as far reaching areas via Google Play, Blackberry, as well as Apple App Store, Symbian, and other internet marketplaces`,
                });
              }}
            >
              Mobile Application
            </p>
            <p
              onMouseEnter={() => {
                setDoc({
                  imgindex: 3,
                  title: "Custom Software Development",
                  desc: `It is a well-known fact that some of the ready-mades, packaged applications have failed to meet the customers' requirements because of their unique needs and differing business practices and processes. We develop customized software based on the user's condition with GUI (user-friendly graphical interface) on any of the mentioned platforms/languages.`,
                });
              }}
            >
              Custom Software
            </p>
            <p
              onMouseEnter={() => {
                setDoc({
                  imgindex: 4,
                  title: "Artificial Intelligence",
                  desc: `It might be easier to state what part of our modern society artificial intelligence (AI) hasn’t touched to show how important it is to our daily lives, business operations and society. Intelligence machines are influencing nearly every facet of our lives to help improve efficiencies and augment our human capabilities.`,
                });
              }}
            >
              Artificial Intelligence
            </p>
            <p
              onMouseEnter={() => {
                setDoc({
                  imgindex: 5,
                  title: "AR & VR",
                  desc: `realities are two extremely essential components for the businesses these days. The organizations are using these methods to boost the education of employees. Also, the improvements in several business projects are seeing enhancement because of AR and VR.`,
                });
              }}
            >
              AR & VR
            </p>
            <p
              onMouseEnter={() => {
                setDoc({
                  imgindex: 6,
                  title: "Ul/UX  Design",
                  desc: `Coming up with an efficient Ul/UX design for an system is always a priority for most system owners. This requires thorough research and prior planning in order to understand the needs of your users and the problem you intend to solve with your system. Regardless of your needs, you will have to come up with a design that works. Below are reasons why you need a good design for your app.`,
                });
              }}
            >
              Ul/UX Design
            </p>
          </div>
        </Zoom>
      </div>
      <Zoom>
        <div className="secondDetails">
          <img src={imgs[doc.imgindex]} className="img-fluid classimgDet" />
          <h1 className="deth">{doc.title}</h1>
          <p className="detp">{doc.desc}</p>
          <>
            <Button variant="primary" onClick={handleShow}>
              Get A Quotation
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Quotation</Modal.Title>
              </Modal.Header>
              <form id="contactForm" autoComplete="off" noValidate>
                <Modal.Body>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter First Name"
                      value={cc.name}
                      onChange={(e) => {
                        setCC({ ...cc, name: e.target.value });
                      }}
                    />
                  </div>

                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="name@example.com"
                      value={cc.email}
                      onChange={(e) => {
                        setCC({ ...cc, email: e.target.value });
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">
                      Mobile
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Mobile Number"
                      value={cc.mobile}
                      onChange={(e) => {
                        setCC({ ...cc, mobile: e.target.value });
                      }}
                    />
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">
                      Project Description
                    </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      value={cc.message}
                      onChange={(e) => {
                        setCC({ ...cc, message: e.target.value });
                      }}
                    ></textarea>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button
                    className="btndet"
                    variant="primary"
                    onClick={() => {
                      handleSubmit();
                    }}
                  >
                    Submit
                  </Button>
                </Modal.Footer>
              </form>
            </Modal>
          </>
        </div>
      </Zoom>
    </div>
  );
};

export default Details;
