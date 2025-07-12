import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Badge,
} from "react-bootstrap";

export default function Cart() {
  const { cartItems, removeFromCart, increment, decrement } =
    useContext(CartContext);

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="py-5">
        <Container className="py-5 text-center">
          <h3>Your cart is empty 🛒</h3>
        </Container>
      </div>
    );
  }

  return (
    <div className="py-5">
      <Container className="py-5">
        <h2 className="mb-4 text-center">Your Shopping Cart</h2>

        <Row className="gy-4">
          {cartItems.map((item) => (
            <Col key={item.id} md={12}>
              <Card className="flex-row align-items-center p-3 shadow-sm">
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="me-3 object-fit-contain rounded"
                />
                <div className="flex-grow-1">
                  <h5 className="mb-1">{item.title}</h5>
                  <small className="text-muted">
                    {item.description.slice(0, 50)}...
                  </small>
                  <div className="d-flex align-items-center gap-3 mt-2">
                    <Button
                      size="sm"
                      variant="outline-dark"
                      onClick={() => decrement(item.id)}
                      disabled={item.quantity === 1}
                    >
                      −
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      size="sm"
                      variant="outline-dark"
                      onClick={() => increment(item.id)}
                      disabled={item.quantity === item.stock}
                    >
                      +
                    </Button>
                    <Badge bg="secondary" className="ms-auto">
                      ${item.price * item.quantity}
                    </Badge>
                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-end mt-4">
          <h4>
            Total: <Badge bg="success">${getTotal().toFixed(2)}</Badge>
          </h4>
        </div>
      </Container>
    </div>
  );
}
