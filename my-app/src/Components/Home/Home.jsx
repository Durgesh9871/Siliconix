import React from "react";
import "./Home.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import one from "../../Assets/one.png";
import two from "../../Assets/two.png";
import three from "../../Assets/three.png";
import four from "../../Assets/four.png";
import LaptopCategory from "./FiveCategory/LaptopCategory";
import Camera from "./FiveCategory/Camera";
import MobileCategory from "./FiveCategory/MobileCategory";
import { TVcategory } from "./FiveCategory/TVcategory";
import { Watchescategory } from "./FiveCategory/Watchescategory";

const Home = () => {
  return (
    <div className="Home">
      <div className="carouselPart">
        <Carousel className="MainCarousel">
          <div className="Carouseldiv">
            <img src={one} alt="one" />
          </div>
          <div className="Carouseldiv">
            <img src={two} alt="two" />
          </div>
          <div className="Carouseldiv">
            <img src={three} alt="three" />
          </div>
          <div className="Carouseldiv">
            <img src={four} alt="four" />
          </div>
        </Carousel>
      </div>
      <div className="CateHome">
        <h1>
          <span>Great Deals</span> All in one Place
        </h1>
        <h3>Choose Your Categories</h3>
        <div>
          <LaptopCategory />
          <Camera />
          <MobileCategory />
          <TVcategory />
          <Watchescategory />
        </div>
      </div>
      <h1 style={{ textAlign: "center", marginTop: "5rem" }}>
        HOPE YOU HAVE A GREAT JOURNEY AT SILICONIX 😃
      </h1>
    </div>
  );
};

export default Home;
