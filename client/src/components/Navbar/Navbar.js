import { useState } from "react";
import { Button, Link } from "react-scroll";
import "./Navbar.css";
import Slide from "react-reveal/Slide";
import imglogo from "./Group 7.svg";
function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 90) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);
  return (
    <Slide bottom>
      <nav
        className={
          navbar
            ? "navbar navbar-expand-md navbar-custom active  fixed-top"
            : "navbar navbar-expand-md navbar-custom  fixed-top"
        }
      >
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <div className="logoImg">
            <img src={imglogo} className="img-fluid lgo" />
          </div>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-awesome fas fa-bars"></span>
          <span class="navbar-toggler-awesome fas fa-times"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="navDES">
              <Link
                activeClass="active"
                to="Home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                HOME
              </Link>
            </li>
            <li className="navDES">
              <Link
                activeClass="active"
                to="SERVICE"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SERVICE
              </Link>
            </li>
            <li className="navDES">
              <Link
                activeClass="active"
                to="About"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </li>
            <li className="navDES">
              <Link
                activeClass="active"
                to="CONTACT"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </Slide>
  );
}

export default Navbar;
