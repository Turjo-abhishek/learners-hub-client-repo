import React from "react";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const course = useLoaderData();
  const { image_url, title, details, price, rating } = course;
  return (
    <Card className="w-50 mx-auto my-5">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className="fw-bolder fs-3">{title}</Card.Title>
        <Card.Text>
            <p><strong  className="fw-bold fs-5 text-danger">Price:</strong> {price} Taka</p>
            <div>
                <div>
                    <span>{rating}</span>
                    
                </div>
            </div>
          <div>{details}</div>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default SingleCourse;
