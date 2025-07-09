import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { CounterStore } from "../../context/counterContext";
import { Badge } from "react-bootstrap";

export default function CustomNavbar() {
  const { totalCounter } = useContext(CounterStore);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto d-flex justify-content-between w-100">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">
              Total {totalCounter > 0 ? <Badge>{totalCounter}</Badge> : null}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
