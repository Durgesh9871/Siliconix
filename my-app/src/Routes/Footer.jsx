import React from "react";
import "./Navbar.css";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <p>Made with 💝 by Siliconix Team</p>
        <div id="FotterDetails">
          <div className="FootIcons">
            <div style={{ textAlign: "center" }}>
              <BsGithub
                className="FooterIcons"
                onClick={() =>
                  window.open("https://github.com/centauricoder01")
                }
              />
              <p>Github</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <BsLinkedin
                className="FooterIcons"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/rajendra01/")
                }
              />
              <p>Linkedin</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <BsGlobe
                className="FooterIcons"
                onClick={() =>
                  window.open("https://centauricoder01.github.io/")
                }
              />
              <p>Portfolio</p>
            </div>
          </div>
          <div className="FooterDetails">
            <div>
              <p>FIND NEARBY STORE</p>
              <p>SIGNUP FOR MEMBERSHIP</p>
              <p>ALREADY A MEMBER</p>
              <p>WANT NEWLETTERS</p>
              <p>SEND FEEDBACK</p>
            </div>
            <div>
              <h4>GET HELP</h4>
              <p>Order</p>
              <p>Status Delivery</p>
              <p>Returns</p>
              <p>Payment Options</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
