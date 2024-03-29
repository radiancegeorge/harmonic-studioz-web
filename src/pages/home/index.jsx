import { useLocation } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./index.scss";
import Jumbotron from "./jumbotron";
import Partners from "./Partners";
import SliderSection from "./sliderSection";
import TestimonySlides from "./testimonySlides";

const WhatWeDo = lazy(() => import("./whatWeDo"));
const JoinOurTeam = lazy(() => import("./joinOurTeam"));

const Home = () => {
  const location = useLocation();
  const heading =
    location.hash !== "#about" ? `Harmonic Studioz` : `Who we are`;
  const text =
    location.hash !== "#about" ? (
      <span>
        The most trustworthy plug for Graphics Design, Motion graphics,
        Branding, Website Development &amp; Maintenance, Software Development
        &apm; Maintenance, Social Media Management, Contents Creation and
        Strategy, Printing and Packaging and lots more.
      </span>
    ) : (
      <span>
        Founded on 13th August 2019, Harmonic Studioz have come a long way from
        its humble beginnings to being a household name in the world with
        different partnerships and contracts all over the world. <br />
        <br />
        Founded on premises of the three major characteristics of a good
        business ie: Dependability, Excellent Customer Service and Uniqueness,
        our clients can always expect the best from us starting from its
        SIMPLICITY. CLARITY and BEAUTY.
      </span>
    );
  const pcImg = location.hash !== "#about" ? "img/pc.png" : "img/pc2.png";
  return (
    <div className="home">
      <Jumbotron
        mainHeader={heading}
        mainText={text}
        pcImg={pcImg}
        customStyle={{
          ...(location.hash === "#about" && { backgroundColor: "#010101" }),
        }}
      />
      {location.hash !== "#about" && <SliderSection />}
      {location.hash === "#about" && (
        <Suspense fallback={<p></p>}>
          <WhatWeDo />
          <JoinOurTeam />
        </Suspense>
      )}

      <Partners />
      <TestimonySlides />
    </div>
  );
};
export default Home;
