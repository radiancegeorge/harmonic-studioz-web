import { partners } from "../../utils/sliderImages";

const Partners = () => {
  return (
    <section className="partners">
      <div className="container">
        <h1>
          <span className="gradient__text">hARMONIC STUDIOZ</span>
          Partners
        </h1>
        <div className="partner__container">
          {partners.map((data, idx) => (
            <div className="boxes">
              <img src={`img/${data}`} alt="" width="100%" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Partners;
