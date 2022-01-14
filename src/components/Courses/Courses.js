import React, { useEffect, useState } from "react";
import Course from "../Course/Course";
import PopularProjects from "../PopularProjects/PopularProjects";
import "./Courses.css";
import Details from "./Details";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch(`Course.json`)
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div>
      <div className="main-components">
        <h3
          className="text-center"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Our Awesome Courses
        </h3>
        <p
          className="w-75 courseParagraph text-center"
          style={{ margin: "0 auto" }}
        >
          the act or experience of one that learns a computer program that makes
          learning fun. 2 : knowledge or skill acquired by instruction or study
          people of good education and considerable learning.
        </p>
        <div className="card-container">
          {courses.map((course) =>
            course.condition === "false" ? (
              <Course key={course.id} course={course}></Course>
            ) : (
              <span></span>
            )
          )}
        </div>
      </div>

      <div>
        <Details></Details>
      </div>

      <div style={{ marginBottom: "100px" }}>
        <PopularProjects></PopularProjects>
      </div>
    </div>
  );
};

export default Courses;
