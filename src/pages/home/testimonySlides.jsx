import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Quote } from "../../img/quote";
import { sliderImages } from "../../utils/sliderImages";

const TestimonySlides = () => {
  const sliderImageWidth = 520;
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
      setOffset(currentOffset + -(sliderImageWidth / 2));
    }
  };

  const handleBackword = () => {
    const { scrollWidth, clientWidth } = sliderWidth;
    const remaining = scrollWidth - (currentOffset + clientWidth);
    console.log(remaining, currentOffset, sliderImageWidth);
    if (remaining > clientWidth) {
      setOffset(currentOffset - -(sliderImageWidth / 2));
    }
  };
  return (
    <section className="testimonies">
      <div className="container">
        <div className="cover__">
          <div className="what__offer">
            <h1>
              <span className="gradient__text">hARMONIC STUDIOZ</span>{" "}
              Testimonies
            </h1>
          </div>
          <div className="image__slider">
            <div
              className="slider"
              ref={slider}
              style={{ transform: `translateX(${currentOffset}px)` }}>
              {sliderImages.map((image, idx) => {
                return (
                  <div
                    className="cover"
                    key={idx}
                    style={{
                      minWidth: sliderImageWidth,
                    }}>
                    <div className="first__section">
                      <div className="avatar">
                        <img src="" alt="" width="100%" />
                      </div>
                      <div className="quote">
                        <Quote />
                      </div>
                    </div>
                    <div className="second__section">
                      <p className="name">
                        {" "}
                        <span className="gradient__text">OMOHLILY HAIR</span>
                      </p>
                      <div className="text">
                        <div className="background__modifier"></div>
                        <span>
                          I got referred to Harmonic Studioz and It's been
                          awesome. Even when I had no idea of what design I
                          wanted, they created the perfect design for my brand.
                          Quality printing as well at a giveaway price. Thank
                          you Harmonic Studioz, it's been great working with you
                          and we will do more in future
                        </span>
                      </div>
                    </div>
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
        </div>
      </div>
    </section>
  );
};

export default TestimonySlides;
