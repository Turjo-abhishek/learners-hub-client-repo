import React from "react";
import Card from "react-bootstrap/Card";
import { useLoaderData } from "react-router-dom";

const Checkout = () => {
  const premiumCourse = useLoaderData();
  console.log(premiumCourse);
  const { title, image_url, details, author } = premiumCourse;
  return (
    <>
      <h2 className="text-center text-danger mt-5 mb-4">
        Check Out the Course
      </h2>
      <Card className="text-center w-75 mx-auto">
        <Card.Header>Instructor: {author.name}</Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Checkout;
