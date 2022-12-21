import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import { FaGithub, FaGoogle } from "react-icons/fa";
import './Login.css';
import { useState } from "react";

const Login = () => {
  const [error, setError] = useState('');

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
      setError('');
      navigate(from, {replace: true})
    })
    .catch(error => setError(error.message))
  }

  const handleGoogle = () => {
    googleLogin(googleProvider)
    .then(result => {
      const user = result.user;
      setError('');
      navigate(from, {replace: true})
    })
    .catch(error => setError(error.message));
    
  }
  const handleGithub = () => {
    gitHubLogin(githubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setError('');
      navigate(from, {replace: true})
    })
    .catch(error => setError(error.message));
    
  }
  return (
    <>
      <Form onSubmit={handleLogin} className=" mx-auto border rounded mt-5 p-3 custom-login">
        <h2 className="mb-3">Sign In</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" required/>
        </Form.Group>
        {error && <Form.Text className="text-danger">
          {error}
        </Form.Text>}
        <Button className="w-100" variant="primary" type="submit">
          Login
        </Button>

        <hr />
        <p className="text-center">Or</p>
        <Button onClick={handleGoogle} className="w-100 mb-2 d-flex align-items-center gap-2 justify-content-center" variant="outline-primary">
        <FaGoogle></FaGoogle>
          <span>Sign In with Google</span>
        </Button>
        <Button onClick={handleGithub} className="w-100  d-flex align-items-center gap-2 justify-content-center" variant="outline-danger">
        <FaGithub></FaGithub>
          Sign In with GitHub
        </Button>
      </Form>
      <p className="text-center mt-2">New to this Website?<Link to='/register' className="text-decoration-none"> Register here!</Link></p>
    </>
  );
};

export default Login;
