import React from "react";
import "../About/About.css";
import AboutImage from "../images/about.jpg";

const Details = () => {
  return (
    <div>
      <div
        className="row"
        style={{ marginTop: "100px", marginBottom: "100px" }}
      >
        <div className="col-lg-6 col-md-12 col-12">
          <aside className="codingImg">
            <img
              src={AboutImage}
              className="detailsSectionImg"
              alt=""
              width="550"
            />
          </aside>
        </div>

        <div className="col-lg-6 mt-lg-3 col-md-12 col-12 detalsTextContainer">
          <aside className="detailsText mt-md-4 mt-lg-0">
            <h5>
              <i className="far fa-lightbulb"></i> Learn Anything Online
            </h5>
            <p className="w-75" style={{ fontSize: "18px" }}>
              The act or experience of one that learns a computer program that
              makes learning fun. knowledge or skill acquired by instruction or
              study.
            </p>
          </aside>
          <aside className="mt-4 detailsText">
            <h5>
              <i className="fas fa-trophy"></i> Communicate People
            </h5>
            <p className="w-75" style={{ fontSize: "18px" }}>
              The act or experience of one that learns a computer program that
              makes learning fun.knowledge or skill acquired by instruction or
              study.
            </p>
          </aside>
          <aside className="mt-4 detailsText">
            <h5>
              <i className="fas fa-th"></i> Share Your Knowledge
            </h5>
            <p className="w-75" style={{ fontSize: "18px" }}>
              The act or experience of one that learns a computer program that
              makes learning fun.knowledge or skill acquired by instruction or
              study.
            </p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Details;
