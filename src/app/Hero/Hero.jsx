import "./hero.css";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="heroInfo">
        <h1>Save your data storage here.</h1>
        <p>
          Data Warehouse is a data storage area that has been tested for
          security, so you can store your data here safely but not be afraid of
          being stolen by others.
        </p>
        <button>Learn more</button>
      </div>
      <div className="hero__img">
        <img src={HeroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
