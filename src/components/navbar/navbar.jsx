import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useContext } from "react";
import { CounterStore } from "../../context/counterContext";
import { Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/cartContext";

export default function CustomNavbar() {
  const { totalCounter } = useContext(CounterStore);
  const { cartItems } = useContext(CartContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          <Nav className="d-flex gap-3">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register">
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/cart">
              Cart{" "}
              {cartItems.length > 0 && (
                <Badge bg="primary">{cartItems.length}</Badge>
              )}
            </Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link as={NavLink} to="/total">
              Total{" "}
              {totalCounter > 0 && <Badge bg="secondary">{totalCounter}</Badge>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
