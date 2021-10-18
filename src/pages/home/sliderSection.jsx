import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { sliderImages } from "../../utils/sliderImages";

const SliderSection = () => {
  const sliderImageWidth = 420;
  const slider = useRef(null);
  const [sliderWidth, setSliderWidth] = useState({
    scrollWidth: 0,
    clientWidth: 0,
  });
  const [currentOffset, setOffset] = useState(0);

  useEffect(() => {
    // console.log(slider.current.scrollWidth, "total width");
    // console.log(slider.current.clientWidth, "visible width");
    setSliderWidth({
      clientWidth: slider.current.clientWidth,
      scrollWidth: slider.current.scrollWidth,
    });
  }, []);

  const handleFoward = () => {
    const { scrollWidth, clientWidth } = sliderWidth;
    const remaining = scrollWidth - (currentOffset + clientWidth);
    console.log(remaining);
    if (remaining <= scrollWidth && scrollWidth > clientWidth) {
      setOffset(currentOffset + -sliderImageWidth);
    }
  };

  const handleBackword = () => {
    const { scrollWidth, clientWidth } = sliderWidth;
    const remaining = scrollWidth - (currentOffset + clientWidth);
    console.log(remaining, currentOffset, sliderImageWidth);
    if (remaining > clientWidth) {
      setOffset(currentOffset - -sliderImageWidth);
    }
  };
  return (
    <section className="what__we__do">
      <div className="container">
        <div className="cover__">
          <div className="what__offer">
            <h1>
              <span className="gradient__text">hARMONIC STUDIOZ</span> What Do
              We Offer
            </h1>
            <div className="question">
              <img src="img/questions/bro.png" alt="" width="100%" />
            </div>
          </div>
          <div className="image__slider">
            <div
              className="slider"
              ref={slider}
              style={{ transform: `translateX(${currentOffset}px)` }}>
              {sliderImages.map((image, idx) => {
                return (
                  <div className="cover" key={idx}>
                    <div
                      className="images"
                      style={{
                        minWidth: sliderImageWidth,
                        maxWidth: sliderImageWidth,
                      }}>
                      <img src={image.url} alt="" width="100%" />
                    </div>
                    <p>{image.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="slider__controls">
            <div className="back" onClick={handleBackword}>
              <FaArrowCircleLeft />
            </div>
            <div className="front" onClick={handleFoward}>
              <FaArrowCircleRight />
            </div>
          </div>
          <div className="see__more">
            Slide on image for more <FaArrowCircleRight />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
