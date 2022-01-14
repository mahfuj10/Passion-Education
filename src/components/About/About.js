import React from "react";
import AboutCard from "./AboutCard";
import "./About.css";
import Details from "../Courses/Details";

// About compnents

const About = () => {
  return (
    <div>
      <p
        className="w-50 text-center sectionText"
        style={{ margin: "0 auto", fontSize: "23px" }}
      >
        Suspendisse ante mi iaculis ac eleifend id venenatis non eros. Sed
        rhoncus gravida eli eu sollicitudin sem iaculis. Mi iaculis ac eleifend
        id venenatis non erossed venenatis non eros sed rhoncus gravida.
      </p>
      <div className="aboutCard">
        <AboutCard
          image="https://cdn.pixabay.com/photo/2016/03/09/09/22/meeting-1245776__480.jpg"
          name="Who we are"
        />
        <AboutCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaoPHhnHMbIF4xU_4_ontNuuZN_oTnBpLTfQ&usqp=CAU"
          name="Our Mission"
        />
        <AboutCard
          image="https://img.freepik.com/free-photo/dslr-camera-system-dark-black-table_80942-3778.jpg?size=626&ext=jpg"
          name="Our Vission
"
        />
      </div>

      <div className="row DetailsComponents">
        <Details></Details>
      </div>
      
      <div  className="w-50 text-center sectionText"
        style={{ margin: "0 auto", fontSize: "22px" }}>
          <p>Coding is a basic literacy in the digital age, and it is important for kids to understand and be able to work with and understand the technology around them. Having children learn coding at a young age prepares them for the future. Coding helps children with communication, creativity, math,writing, and confidence.</p>
      </div>
      
      <div className="LearningImg">
        <img
          src="https://image.freepik.com/free-vector/illustration-social-media-concept_53876-18383.jpg"
          width="650"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
