import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import './Courses.css';
 
const Courses = () => {
  const courses = useLoaderData();
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col lg="3">
          <div className="custom-left-nav">
            <h2 className="mb-4 text-white fw-bolder">Overall Courses</h2>
            {courses?.map((course) => 
            <p key={course?._id} className="">
                <Link to={`/courses/${course?._id}`} className="left-nav-course" >{course?.title}</Link>
              </p>
            )}
          </div>
        </Col>
        <Col lg="9">
          <div className="container">
            <h2 className="mb-4 mt-4 fw-bolder text-center text-danger">Course Details</h2>
            <div className="row row-cols-lg-3 gap-4">
                {
                    courses?.map(course => <CourseCard key={course?._id} course={course}></CourseCard>)
                }
            </div>
            
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Courses;
