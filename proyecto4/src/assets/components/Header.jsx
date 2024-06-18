import React from "react";
import { Navbar, Container } from "react-bootstrap";

const Header = ({ query, setQuery }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Cocktail List</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll"></Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
