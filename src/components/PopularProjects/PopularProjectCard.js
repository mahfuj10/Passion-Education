import React from "react";

const PopularProjectCard = (props) => {
  const { course, image } = props.course;
  return (
    <div className="col-lg-4 col-md-6 col-12">
      <aside className="poopularProjectTitle">
        <h5>{course}</h5>
        <small>View Course</small>
      </aside>

      <aside className="ms-lg-4">
        <img
          className="Courseimg mb-5"
          width="450"
          height="300"
          src={image}
          alt=""
        />
      </aside>
    </div>
  );
};

export default PopularProjectCard;
