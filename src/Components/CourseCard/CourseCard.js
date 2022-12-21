import React from "react";
import Button from "react-bootstrap/Button";
import './CourseCard.css';
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const {title, image_url, details, _id} = course;
  return (
    <Card className="custom-card">
      <Card.Img height={150} variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className="h-25 mb-3">{title}</Card.Title>
        <Card.Text className="mb-1">
          <span>{details?.slice(0,100)}...</span>
        </Card.Text>
        {/* <p className="">
          <span>{details?.slice(0,50)}...</span>
        </p> */}

        <Link to={`/courses/${_id}`}><Button className="w-100" variant="primary">Read Details</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;
