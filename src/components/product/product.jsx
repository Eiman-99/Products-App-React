import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useState } from "react";

function Product({ title, description, image, stock }) {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter((prev) => prev + 1);
  }

  function increment() {
    if (counter < stock) {
      setCounter((prev) => prev + 1);
    }
  }
  function decrement() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
    }
  }

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img variant="top" src={image} className="w-50 mx-auto h-100 m-4" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <p>stock: {stock}</p>
        <div className="d-flex justify-content-between">
          <Button
            variant="success"
            onClick={handleClick}
            disabled={counter >= 1}
          >
            Add to cart
          </Button>
          {counter > 0 ? (
            <div className="counter d-flex gap-2 align-items-center">
              <button className="btn btn-danger" onClick={decrement}>
                -
              </button>
              <p className="mb-0">{counter}</p>
              <button
                className="btn btn-dark"
                onClick={increment}
                disabled={counter === stock}
              >
                +
              </button>
            </div>
          ) : null}
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
