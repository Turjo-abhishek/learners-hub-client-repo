import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";

const Register = () => {
  const {createUser} = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
    })
    .catch(error => console.error(error))
  }
  return (
    <>
      <Form onSubmit={handleRegister} className="w-25 mx-auto border rounded mt-5 p-3">
        <h2 className="mb-3">Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            name="photoUrl"
            type="text"
            placeholder="Enter the url"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p className="text-center mt-2">
        Already Have an Acount?
        <Link to="/login" className="text-decoration-none">
          {" "}
          Login here!
        </Link>
      </p>
    </>
  );
};

export default Register;
