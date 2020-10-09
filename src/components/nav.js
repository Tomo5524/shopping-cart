import React from "react";
// import { Link, NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { NavLink } from "react-router";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar className="navbar-dark my-3" bg="dark" expand="lg">
      <Navbar.Brand as={Link} to="/">
        SRST Fitness
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav>
          {/* <Nav.Link to="/"> */}
          {/* with this code, everytime i click a nav, page refreshes.
          solution was to add as={Link} */}
          {/* https://github.com/react-bootstrap/react-bootstrap/issues/3944 */}
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="/shop">
            Shop
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/shop">
              Shop
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    // <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
    //   {/* <a className="navbar-brand display-1" href="">
    //     SRSTFitness
    //   </a> */}
    //   <NavLink className="navbar-brand" to="/">
    //     SRSTFitness
    //   </NavLink>
    //   <button
    //     className="navbar-toggler"
    //     type="button"
    //     data-toggle="collapse"
    //     data-target="#navbarNav"
    //     aria-controls="navbarNav"
    //     aria-expanded="false"
    //     aria-label="Toggle navigation"
    //   >
    //     <span className="navbar-toggler-icon"></span>
    //   </button>
    //   <div
    //     className="collapse navbar-collapse justify-content-end"
    //     id="navbarNav"
    //   >
    //     <ul className="navbar-nav">
    //       <li className="nav-item">
    //         {/* <a className="nav-link" href="/">
    //           Home
    //         </a> */}
    //         {/* everytime we navigate to a different component, page refreshes which should not happen */}
    //         <NavLink className="nav-link" to="/">
    //           Home
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         <NavLink className="nav-link" to="/shop">
    //           Shop
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         {/* <a className="nav-link" href="/cart">
    //         </a> */}
    //         <NavLink className="nav-link" to="/cart">
    //           Cart
    //         </NavLink>
    //       </li>
    //       <li className="nav-item">
    //         {/* <a className="nav-link" href="/about">    </a> */}
    //         {/* <a className="nav-link disabled" href="#"> */}
    //         <NavLink className="nav-link" to="/about">
    //           About
    //         </NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // </nav>
  );
};

export default NavBar;
