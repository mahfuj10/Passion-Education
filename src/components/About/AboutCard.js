import React from "react";
import { Card } from "react-bootstrap";

// single card design

const AboutCard = (props) => {
  return (
    <div>
      <Card
        style={{ width: "18rem", border: "none", marginBottom: "50px" }}
        className="shadow"
      >
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title
            style={{ fontSize: "20px" }}
            className="course-title mb-2"
          >
            {props.name}
          </Card.Title>

          <Card.Text className="course-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            officia atque! Recusandae quam fugit autem earum soluta dignissimos.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default AboutCard;
