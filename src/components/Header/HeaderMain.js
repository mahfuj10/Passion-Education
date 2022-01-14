import React from "react";
import "./Header.css";
import image from "../images/illustration-1.png";
import { useHistory } from "react-router";
import vectorImg from "../images/image1.png";
import secondVectorImg from "../images/image2.png";

// middle part of header

const HeaderMain = () => {
  const history = useHistory();

  const handaleHistory = () => {
    history.push("/service");
  };

  return (
    <div className="row header">
      <div className="col-lg-6 col-12">
        <div className="headerText">
          <h1 className="mb-3">
            <span style={{ fontWeight: "400" }}>
              <span style={{ color: "#06043D" }}>Learn From</span>
            </span>{" "}
            <span style={{ fontWeight: "700", color: "#FEBD39" }}>
              Anywhere
            </span>
          </h1>
          <p className="mb-3" style={{ color: "#06043D", fontSize: "20px" }}>
            Join Millions Of Learners From Around The World! Find The Right
            Instructor For You. Any Topic, Skill Level, Or Language
          </p>
          <button className="animationBtn">GET STARTED</button>
          <button className="header-btn-one">GET STARTED</button>
          <button className="header-btn-two" onClick={handaleHistory}>
            VIEW COURSES
          </button>
          <br />
          <img className="firstImg" src={vectorImg} alt="" />
        </div>
      </div>

      <div className="col-lg-6 col-12 vectorImg">
        <img className="learningImg" src={image} alt="" />
        <aside className="secondImg">
          <img src={secondVectorImg} alt="" />
        </aside>
      </div>
    </div>
  );
};

export default HeaderMain;
