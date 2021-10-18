import { useEffect, useRef, useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Quote } from "../../img/quote";
import { sliderImages, testimonies } from "../../utils/sliderImages";

const TestimonySlides = () => {
  const [sliderImageWidth, setWidth] = useState(520);
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

    if (slider.current.clientWidth <= 600) {
      setWidth(slider.current.clientWidth);
    }
  }, []);
  window.addEventListener("resize", () => {
    if (slider?.current?.clientWidth <= 600) {
      setWidth(slider?.current?.clientWidth);
    }
  });
  const handleFoward = () => {
    const { scrollWidth, clientWidth } = sliderWidth;
    const remaining = scrollWidth - (currentOffset + clientWidth);
    console.log(remaining);
    if (remaining <= scrollWidth + 300 && scrollWidth > clientWidth) {
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
              {testimonies.map((testimony, idx) => {
                return (
                  <div
                    className="cover"
                    key={idx}
                    style={{
                      minWidth: sliderImageWidth,
                    }}>
                    <div className="first__section">
                      <div className="avatar">
                        <img src={testimony.avatar} alt="" width="100%" />
                      </div>
                      <div className="quote">
                        <Quote />
                      </div>
                    </div>
                    <div className="second__section">
                      <p className="name">
                        {" "}
                        <span className="gradient__text">{testimony.name}</span>
                      </p>
                      <div className="text">
                        <div className="background__modifier"></div>
                        <span>{testimony.text}</span>
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
