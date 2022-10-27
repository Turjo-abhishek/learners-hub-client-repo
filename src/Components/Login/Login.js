import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import './Login.css';

const Login = () => {

  const {googleLogin, gitHubLogin, login} = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
    .then(result =>{
      const user = result.user;
      console.log(user);
      form.reset();
      navigate(from, {replace: true})
    })
    .catch(error => console.error(error))
  }

  const handleGoogle = () => {
    googleLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(error => console.error(error));
    
  }
  const handleGithub = () => {
    gitHubLogin(githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      navigate(from, {replace: true})
    })
    .catch(error => console.error(error));
    
  }
  return (
    <>
      <Form onSubmit={handleLogin} className=" mx-auto border rounded mt-5 p-3 custom-login">
        <h2 className="mb-3">Sign In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>
        <hr />
        <p className="text-center">Or</p>
        <Button onClick={handleGoogle} className="w-100 mb-2" variant="outline-primary">
          Sign In with Google
        </Button>
        <Button onClick={handleGithub} className="w-100" variant="outline-danger">
          Sign In with GitHub
        </Button>
      </Form>
      <p className="text-center mt-2">New to this Website?<Link to='/register' className="text-decoration-none"> Register here!</Link></p>
    </>
  );
};

export default Login;
