import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { CounterStore } from "../../context/counterContext";

function Product({ title, description, thumbnail, stock, rating }) {
  const [counter, setCounter] = useState(0);
  const { setTotalCounter } = useContext(CounterStore);

  function handleClick() {
    setCounter((prev) => prev + 1);
    setTotalCounter((prev) => prev + 1);
  }

  function increment() {
    if (counter < stock) {
      setCounter((prev) => prev + 1);
      setTotalCounter((prev) => prev + 1);
    }
  }
  function decrement() {
    if (counter > 0) {
      setCounter((prev) => prev - 1);
      setTotalCounter((prev) => prev - 1);
    }
  }

  function renderStars() {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={i <= rating ? "text-warning" : "text-secondary"}
        />
      );
    }
    return stars;
  }

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={thumbnail}
        className="w-100 mx-auto h-100 m-4"
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <div>{renderStars()}</div>
        <Card.Text>{description.slice(0, 50)}...</Card.Text>
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
