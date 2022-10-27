import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import { Button } from "react-bootstrap";

const Header = () => {
  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then(() => {

    })
    .catch(error => {
      console.error(error); 
    })
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>
          <Link to='/'>
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Learner's Hub
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            
              <Link to="/courses">Courses</Link>
            
            <Link to='/faq'>FAQ</Link>
            <Link to='/blog'>Blog</Link>
            {
              user?.uid? 
              <Button onClick={handleLogOut} variant="outline-primary">Sign Out</Button>
              :
              <>
              <Link to="/login">Sign In</Link>
              <Link to="/register">Register</Link>
            </>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
