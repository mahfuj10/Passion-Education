import Button from "@restart/ui/esm/Button";
import React from "react";
import { Card } from "react-bootstrap";

const Course = (props) => {
  const { name, price, description, image } = props.course;

  return (
    <Card
      style={{ width: "17rem", border: "none", marginBottom: "50px" }}
      className="shadow"
    >
      <Card.Img height="171" variant="top" src={image} />
      <Card.Body>
        <Card.Text style={{ display: "flex", justifyContent: "space-between" }}>
          <Card.Title className="course-title">{name}</Card.Title>
          <Card.Title className="course-price">${price}</Card.Title>
        </Card.Text>
        <Card.Text className="course-desc">
          {description.slice(0, 90)}.
        </Card.Text>
        <Button className="course-btn">READ MORE</Button>
      </Card.Body>
    </Card>
  );
};

export default Course;
