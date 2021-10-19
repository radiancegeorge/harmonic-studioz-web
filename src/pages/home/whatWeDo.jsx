import "./whatWeDo.scss";
const WhatWeDo = () => {
  return (
    <section className="what__we__do__">
      <div className="container">
        <div className="wrap">
          <h1>
            <span className="gradient__text">hARMONIC STUDIOZ</span> What We Do
          </h1>
          <div className="display">
            <div className="box">
              <div className="img">
                <img src="img/Rectangle 56.png" alt="" width="100%" />
              </div>
              <h3>Web Development</h3>
              <div className="summary">
                <div className="background__design"></div>
                <ul>
                  <li className="gradient__text">
                    Well defined target audience.
                  </li>
                  <li className="gradient__text">Attractive Design.</li>
                  <li className="gradient__text">
                    Mind blowing User experience.
                  </li>
                  <li className="gradient__text">Amazing User Interface</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img
                  src="img/WhatsApp Image 2021-10-18 at 17.37.12.jpeg"
                  alt=""
                  width="100%"
                />
              </div>
              <h3>Branding</h3>
              <div className="summary">
                <div className="background__design"></div>

                <ul>
                  <li className="gradient__text">Unique Identification</li>
                  <li className="gradient__text">Explicit Value for clients</li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <video
                  src="video/WhatsApp Video 2021-10-18 at 17.37.12.mp4"
                  alt=""
                  width="100%"
                  autoPlay={true}
                  muted
                  loop
                  controls
                />
              </div>
              <h3>Visual and Motion Effect</h3>
              <div className="summary">
                <div className="background__design"></div>

                <ul>
                  <li className="gradient__text">
                    Mind blowing design structure and transition.
                  </li>
                  <li className="gradient__text">
                    Detail Brand communication.
                  </li>
                </ul>
              </div>
            </div>
            <div className="blank__design"> </div>
            <div className="box">
              <div className="img">
                <img src="img/Rectangle 58.png" alt="" width="100%" />
              </div>
              <h3>Mobile App Development</h3>
              <div className="summary">
                <div className="background__design"></div>

                <ul>
                  <li className="gradient__text">Top notch Security</li>
                  <li className="gradient__text">
                    Amazing Pushing Notifications
                  </li>
                </ul>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src="img/Rectangle 59.png" alt="" width="100%" />
              </div>
              <h3>Social Media Management</h3>
              <div className="summary">
                <div className="background__design"></div>

                <ul>
                  <li className="gradient__text">Great social engagement.</li>
                  <li className="gradient__text">
                    Mad design contents and design.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
