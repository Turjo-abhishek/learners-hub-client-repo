import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col lg="3">
          <div className=" bg-secondary p-3 rounded">
            <h2>Overall Courses</h2>
            {courses.map((course) => 
            <p>
                <Link to={`/courses/${course._id}`} className="text-decoration-none text-white" >{course.title}</Link>
              </p>
            )}
          </div>
        </Col>
        <Col lg="9">
          <div className="container">
            <h2>Course Details</h2>
            <div className="row row-cols-lg-3">
                {
                    courses.map(course => <CourseCard key={course._id} course={course}></CourseCard>)
                }
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
