import "./index.scss";
import Jumbotron from "./jumbotron";
import SliderSection from "./sliderSection";
const Home = () => {
  return (
    <div className="home">
      <Jumbotron />
      <SliderSection />
      <section className="partners">
        <div className="container">
          <h1>
            <span className="gradient__text">hARMONIC STUDIOZ</span>
            Partners
          </h1>
          <div className="partner__container">
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
            <div className="boxes"></div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
