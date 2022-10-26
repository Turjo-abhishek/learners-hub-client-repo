import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
    const {title, image_url, details, _id} = course;
  console.log(course);
  return (
    <Card className="">
      <Card.Img height={150} variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <span>{details.slice(0,150)}...</span>
        </Card.Text>
        <Link to={`/courses/${_id}`}><Button className="w-100" variant="primary">Read Details</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default CourseCard;