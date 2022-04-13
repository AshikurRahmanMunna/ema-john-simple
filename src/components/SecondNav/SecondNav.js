import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./SecondNav.css";

const SecondNav = () => {
  const [categoryIcon, setCategoryIcon] = useState(faBars);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const setMouseEnter = () => {
    setCategoryIcon(faX);
    setShow(!show);
  };
  const setMouseOut = () => {
    setCategoryIcon(faBars);
    setShow(!show);
  };
  return (
    <Navbar expand="lg" collapseOnSelect variant="dark" className="second-nav">
      <Container>
        <NavDropdown
          onClick={() => setOpen(!open)}
          show={show}
          onMouseEnter={setMouseEnter}
          onMouseLeave={setMouseOut}
          className="categories-dropdown"
          title={
            <span>
              {<FontAwesomeIcon icon={categoryIcon}></FontAwesomeIcon>}{" "}
              <p>Category</p>
            </span>
          }
          id="collasible-nav-dropdown"
        >
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        <Nav className="ms-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default SecondNav;
