import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Blog = () => {
  return (
    <>
    <h2 className="text-danger mb-3 text-center fs-1 fw-bold mt-5">Blog</h2>
      <Accordion className="w-75 mx-auto mb-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>What is Cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            Firebase is maintained by Google which is a trusted service provider
            as well as popular in the whole world. People are aware that the
            security and protection they provide are uncomparable. Also it is
            handy to use and free services are available for developers. So we
            are using firebase.<br></br>
            Yes there are also other options for authentication other than
            firebase.Some of them are:
            <li>Backendless</li>
            <li>Back4App</li>
            <li>Kuzzle</li>
            <li>PubNub</li>
            <li>Heroku</li>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
            The private route component is similar to the public route, the only
            change is that redirect URL and authenticate condition. If the user
            is not authenticated he will be redirected to the login page and the
            user can only access the authenticated routes If he is authenticated
            (Logged in). <br></br>
            For example, let's say there is a website of courses. Now the user
            has access to every pages and he can visit every information. But
            the page with information with premium access has to be restricted.
            So we make a private route component and place the route inside the
            private route component in such a way that the route becomes private
            route component's child. Now in the private route component we make
            conditions that if the user is logged in only then he will be
            accessed to that page or he will be redirected to the login page.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            JavaScript was used mainly for client-side scripting inside "script"
            tags executing in web browsers. This limitation meant that
            developers were often working in many different languages and
            frameworks between the front-end (client-side) and backend
            (server-side) aspects of a web application. Node allows developers
            to write JavaScript code that runs directly in a computer process
            itself instead of in a browser. Node can, therefore, be used to
            write server-side applications with access to the operating system,
            file system, and everything else required to build fully-functional
            applications.
            <br />
            Node. js runs on chrome v8 engine which converts javascript code
            into machine code, it is highly scalable, lightweight, fast, and
            data-intensive and this is how node js works.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default Blog;
