import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from "../../img/logo.png";

export const Navigation = () => {

    return (
        <div>
        <Navbar bg="transparent" expand="lg">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="HP-APP"
                        src={logo} 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/books">Libros</Nav.Link>
                    <Nav.Link href="/characters">Personajes</Nav.Link>
                    <Nav.Link href="/spells">Hechizos</Nav.Link>
                    <Nav.Link href="/login">Logout</Nav.Link> 
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </div>
      
    );
}
