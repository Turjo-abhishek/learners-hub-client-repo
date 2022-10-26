import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const Header = () => {
  return (
    //     <Navbar bg="light">
    //     <Container>
    //       <Navbar.Brand href="#home">
    //         <img
    //           alt=""
    //           src="/logo.svg"
    //           width="30"
    //           height="30"
    //           className="d-inline-block align-top"
    //         />{' '}
    //         React Bootstrap
    //       </Navbar.Brand>
    //     </Container>
    //   </Navbar>
    <Navbar collapseOnSelect expand="lg" bg="light" >
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src="/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
          </Nav>
          <Nav >
            <Nav.Link href="#deets">Courses</Nav.Link>
            <Nav.Link href="#memes">
              FAQ
            </Nav.Link>
            <Nav.Link href="#memes">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
