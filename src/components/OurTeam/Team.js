import React from 'react';
import { Card } from 'react-bootstrap';
import './OurTeam.css';

const Team = props => {

    const { image, name,profession } = props.member;

    return (
            <Card  style={{ width: '13rem',border:"none" }} >
  <Card.Img  className="instrustorImg" variant="top" src={image} />
  <Card.Body>
    <Card.Title className="text-center" style={{fontWeight:"400",fontSize:"20px"}}>{name}</Card.Title>
    <Card.Text className="text-center" style={{fontSize:"17px"}}>
    {profession}
    </Card.Text>
  </Card.Body>
</Card>
    );
};

export default Team;