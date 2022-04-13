import {
  faArrowRightFromBracket,
  faBars,
  faHome,
  faShoppingCart,
  faUser,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useSearch from "../../hooks/useSearch";
import logo from "../../images/Logo.svg";
import SecondNav from "../SecondNav/SecondNav";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const { setSearchText } = useSearch();
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const handleSignOut = () => {
    signOut(auth);
  };
  const setMouseEnter = () => {
    setShow(!show);
  };
  const setMouseOut = () => {
    setShow(!show);
  };
  const handleLogOut = () => {
    signOut(auth);
  }
  return (
    <div>
      <Navbar expand="lg" className="navbar-main">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Bhalo Automobile
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex ms-auto me-auto">
              <FormControl
                type="search"
                name="s"
                placeholder="Search anything..."
                className="nav-search"
                aria-label="Search"
                onChange={setSearchText}
              />
              <button className="search-btn">Search</button>
            </Form>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Cart
              </Nav.Link>
              {user ? 
                <button onClick={handleLogOut} className="btn btn-link text-dark text-decoration-none"><FontAwesomeIcon icon={faArrowRightFromBracket}></FontAwesomeIcon> Log Out</button>
              : 
                <Nav.Link as={Link} to="/login">
                  <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Login
                </Nav.Link>
              }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <SecondNav></SecondNav>
    </div>
  );
};

export default Header;
