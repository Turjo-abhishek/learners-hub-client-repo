import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/Authprovider/Authprovider";
import { Button, Image } from "react-bootstrap";
import logo from "../../assets/logo-removebg-preview.png";
import "./Header.css";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDark, setIsDark] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <Navbar className="navbar-custom" collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand>
          <Link className="navbar-name" to="/">
            <img
              alt=""
              src={logo}
              width="60"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            <span>Learner's Hub</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav>
            <Link className="nav-link" to="/courses">
              Courses
            </Link>

            <Link className="nav-link" to="/faq">
              FAQ
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            {
              user?.uid?
              <button
                className=" btn user-photo"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={user?.displayName}
                >
                  <Image
                  className="rounded-pill"
                  width={30}
                  src={user?.photoURL}
                ></Image>
                </button>
                :
                <button
                className="btn user-photo"
                  type="button"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title={user?.displayName}
                >
                  <FaUser></FaUser>
                </button>
                  
            }
            {user?.uid ? (
              <>
                <Button className="logout-btn" onClick={handleLogOut}>
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                <Link className="nav-link" to="/login">
                  Sign In
                </Link>
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </>
            )}
            {isDark ? (
              <Button className="toggle-btn-light" onClick={handleToggle}>
                Light Mode
              </Button>
            ) : (
              <Button className="toggle-btn-dark" onClick={handleToggle}>
                Dark Mode
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
