import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { Button } from "react-bootstrap";

const SingleCourse = () => {
  const course = useLoaderData();
  const { image_url, title, details, price, rating, author, _id } = course;
  return (
    <Card className="w-50 mx-auto my-5">
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title className="fw-bolder fs-3">{title}</Card.Title>
        <Card.Text>
            <p className="my-0"><strong  className="fw-bold fs-5 text-danger">Price:</strong> {price} Taka</p>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <span>Author: {author.name}</span>
                </div>
                <div className="d-flex align-items-center gap-1">
                    <span>Rating: {rating.number}</span>
                    <FaStar className="text-warning"></FaStar>
                </div>
            </div>
          <div>{details}</div>
        </Card.Text>
      </Card.Body>
      <Card.Body>
        <Link to={`/premium/${_id}`}><Button className="">Get Premium Access</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default SingleCourse;
