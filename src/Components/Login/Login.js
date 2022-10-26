import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Form className="w-25 mx-auto border rounded mt-5 p-3">
        <h2 className="mb-3">Sign In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <hr />
        <p className="text-center">Or</p>
        <Button className="w-100 mb-2" variant="outline-primary">
          Sign In with Google
        </Button>
        <Button className="w-100" variant="outline-danger">
          Sign In with GitHub
        </Button>
      </Form>
      <p className="text-center mt-2">New to this Website?<Link to='/register' className="text-decoration-none"> Register here!</Link></p>
    </>
  );
};

export default Login;
