import React from "react";
import {Box, Link} from "@chakra-ui/react"
;
import { RiFacebookLine } from 'react-icons/ri';
import { AiOutlineInstagram ,AiFillYoutube} from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaPinterestP } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';




function Footer() {
    return (
      <>
        <Box style={{ backgroundColor: "#f4f6f9" , marginTop:"60px" }}>
          <Box style={{ display: "flex", padding:"20px" }}>
            <Box style={{ width: "66%", height: "320px" }}>
              <Box
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, auto)",
                  rowGap: "30px",
                  justifyContent: "space-around",
                  marginTop: "10px",
                }}
              >
                <Box style={{ textAlign: "left" }}>
                  <b href="" style={{ textDecoration: "none", color: "black" }}>
                  Order & Purchases
                  </b>{" "}
                  <br />
                  <Link fontSize="12px" color={"blue"}>
                    Check Order Status
                  </Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">
                    Shipping, Delivery & Pickup
                  </Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Returns & Exchanges</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Price Match Guarantee</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Product Recalls</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Trade-In Program</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Gift Cards</Link>
                  <br />
                </Box>
  
                <Box style={{ textAlign: "left" }}>
                  <b href="" style={{ textDecoration: "none", color: "black" }}>
                  Support & Services
                  </b>{" "}
                  <br />
                  <Link fontSize={"12px"} color="blue">Visit our Support Center</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Shop with an Expert</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Schedule a Service</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Manage an Appointment</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Protection & Support Plans</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Haul Away & Recycling</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Haul Away & Recycling</Link>
                  <br />
                </Box>
                <Box style={{ textAlign: "left" }}>
                  <b href="" style={{ textDecoration: "none", color: "black" }}>
                  Partnerships
                  </b>{" "}
                  <br />
                  <Link fontSize={"12px"} color="blue">Affiliate Program</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Advertise with Us</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Developers</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Best Buy Health</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Best Buy Education</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Best Buy Business</Link>
                  <br />
                
                </Box>
                <Box style={{ textAlign: "left" }}>
                  <b style={{ textDecoration: "none", color: "black" }}>
                  Payment Options
                  </b>
                  <br/>
                  <Link fontSize={"12px"} color="blue">My Best Buy® Credit Card</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Pay Your Bill at Citibank</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Lease to Own</Link>
                  <br />
                </Box>
                <Box style={{ textAlign: "left" }}>
                  <b  style={{ textDecoration: "none", color: "black" }}>
                  Rewards & Membership
                  </b>{" "}
                  <br />
                  <Link fontSize={"12px"} color="blue">Best Buy Totaltech</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">My Best Buy</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">View Points & Certificates</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Member Offers</Link>
                  <br />
                </Box>
                <Box style={{ textAlign: "left" }}>
                  <b style={{ textDecoration: "none", color: "black" }}>
                  About Best Buy
                  </b>{" "}
                  <br />
                  <Link fontSize={"12px"} color="blue">Corporate Information</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Careers</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Corporate Responsibility & Sustainability</Link>
                  <br />
                  <Link fontSize={"12px"} color="blue">Discover & Learn</Link>
                  <br />
                </Box>
              </Box>
            </Box>
            <Box
              style={{
                textAlign: "left",
                marginLeft: "10%",
                marginTop:"1%",
                width: "34%",
                height: "300px",
                textAlign: "justify",
                borderLeft: "1px solid #e7ecf3",
                padding: "20px",
                backgroundColor:"white"
              }}
            >
              <Box
                style={{
                  fontSize: "12px",
                  fontWeight: "600",
                  marginBottom: "10px",
                  marginTop:"10px"
                }}
              >
                <Link color={"blue"}>Sign in or Create Account</Link>
              </Box>
              <br/>
              <b style={{ fontSize: "15px", width: "40%" }}>
              Get the latest deals and more.
              </b>
              <br/>
              <input
                style={{ width: "100%", height: "38px", marginTop: "10px" ,border:"1px solid grey", borderRadius:"5px" }}
                type="text"
                placeholder="Enter Email Address"
                
              />
              <br/>
              <button
                style={{
                  width: "100%",
                  backgroundColor: "#0046be",
                  height: "38px",
                  marginTop: "10px",
                  color:"white",
                  borderRadius:"5px"
                }}
              >
                Signup
              </button>
              <Box style={{ display: "flex", justifyContent: "start"  , gap:"35px" , marginTop:"10px"}}>
              <a href="https://www.facebook.com/BestBuyCanada" target={"_blank"} style={{textDecoration:"none" , color:"inherit"  }}>
                <RiFacebookLine />
              </a>
              <a href="https://www.instagram.com/accounts/login/?next=/bestbuycanada/" target={"_blank"} style={{textDecoration:"none" , color:"inherit"  }}>
                <GrLinkedinOption />
              </a>
              <a href="https://www.linkedin.com/company/best-buy/" target={"_blank"} style={{textDecoration:"none" , color:"inherit"  }}>
                <AiOutlineInstagram />
              </a>
              <a href="https://www.pinterest.com/bestbuycanada/" target={"_blank"} style={{textDecoration:"none" , color:"inherit"  }}>
                <FaPinterestP />
              </a>
              <a href="https://twitter.com/bestbuycanada" target={"_blank"} style={{textDecoration:"none" , color:"inherit"  }}>
                <FaTwitter />
              </a>
              <a href="https://www.youtube.com/user/CanadaBestBuy" target={"_blank"} style={{textDecoration:"none" , color:"inherit"  }}>
                <AiFillYoutube />
              </a>
            </Box>
          </Box>
        </Box>
        <Box
          style={{
            borderTop: "1px solid #e7ecf3",
            marginTop: "30px",
            textAlign: "left",
            fontSize: "9px",
            lineHeight: "14px",
            marginLeft: "50px",
          }}
        >
            <Box style={{marginTop:"10px"}}>
              {" "}
              <Box style={{display:"flex",gap:"20px" , color:"blue", marginBottom:"10px"}}>
                <Link>Accessibility</Link>
                <Link>Terms & Conditions</Link>
                <Link>Privacy</Link>
                <Link>Interest-Based Ads</Link>
                <Link>California Privacy Rights</Link>
                <Link>Do Not Sell My Personal Information</Link>
                <Link>California Supply Chain Transparency Act</Link>
              </Box>
              <Box>
              In-store pricing may vary. Prices and offers are subject to change. © 2022 Best Buy. All rights reserved. BEST BUY, the BEST BUY logo, the tag design, and MY BEST BUY are trademarks of Best Buy and its affiliated companies.
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
  }
  
  export default Footer;