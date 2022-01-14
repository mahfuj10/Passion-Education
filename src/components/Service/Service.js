import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import Course from "../Course/Course";
import "./Service.css";

const Service = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("Course.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="service-contaner">
      <h3 className="courseTitle">Our Awesome Courses </h3>

      <div className="service-section">
        {courses.map((course) => (
          <Course course={course}> </Course>
        ))}
      </div>
    </div>
  );
};

export default Service;
