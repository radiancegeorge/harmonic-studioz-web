import { FaUserFriends } from "react-icons/fa";
import GradientLink from "../../components/gradientLink";
import { team } from "../../utils/team";

const JoinOurTeam = () => {
  return (
    <div className="join__our__team">
      <div className="container">
        <div className="wrap">
          <h1>
            <span className="gradient__text">hARMONIC STUDIOZ</span>
            Join our team
          </h1>
        </div>
      </div>
      <div className="main__body">
        <div className="white__background"></div>
        <div className="container">
          <div className="our__team">
            <div className="image">
              <img
                width="100%"
                src="img/hannah-busing-Zyx1bK9mqmA-unsplash 1.png"
                alt=""
              />
            </div>
            <div className="content">
              <h3>
                <FaUserFriends color="#2D5DD7" opacity="0.3" />
                <span>OUR TEAM</span>
              </h3>
              <p className="text">
                As seasoned and experienced professionals in their respective
                field, our team is passionate and dedicated to giving the best
                service. <br />
                With a combination of solid leadership, communication, and
                access to good resources plus the right mix of trust, ambition,
                and encouragement, our team are positioned to achieve excellent
                results.
              </p>
              <GradientLink>WORK WITH US</GradientLink>
            </div>
          </div>
          <div className="team">
            <div className="tag">
              <p>Members</p>
            </div>
            <div className="people__info">
              {team.map((person, idx) => {
                return (
                  <div className="wrap" key={idx}>
                    <div className="image__container">
                      <img src={`img/${person.img}`} width="100%" alt="" />
                    </div>
                    <div className="name">
                      {person.name}
                      <span>{person.position}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default JoinOurTeam;
