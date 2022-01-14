import React, { useEffect, useState } from "react";
import PopularProjectCard from "./PopularProjectCard";
import "./PopularProjects.css";

// popular projects components

const PopularProjects = () => {
  const [popularCourse, setPopularCourse] = useState([]);

  useEffect(() => {
    fetch(`PopularCourse.json`)
      .then((res) => res.json())
      .then((data) => setPopularCourse(data));
  }, []);

  return (
    <div className="popularProject">
      <h3 className="text-center">Our Popular Projects</h3>
      <p>
        Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed
        rhoncus gravida eli eu sollicitudin sem iaculis.
      </p>

      <div className="row">
        {popularCourse.map((course) => (
          <PopularProjectCard
            course={course}
            key={course.id}
          ></PopularProjectCard>
        ))}
      </div>
    </div>
  );
};

export default PopularProjects;
