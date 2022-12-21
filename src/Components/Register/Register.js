import React from "react";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import './Register.css';
import toast from 'react-hot-toast';
import { useState } from "react";

const Register = () => {
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const [error, setError] = useState("");

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
      handleUpdateUserProfile(name, photoUrl);
      toast.success('Congratulations!! You are registered')
    })
    .catch(error => setError(error))
  }

  const handleUpdateUserProfile = (name, photoUrl) => {
    const profile ={
      displayName: name,
      photoURL: photoUrl
    }
    updateUserProfile(profile)
    .then(() => {})
    .catch(error => console.error(error))
  }
  return (
    <>
      <Form onSubmit={handleRegister} className=" mx-auto border rounded mt-5 p-3 custom-register">
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
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
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
