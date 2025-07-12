import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { axiosInterceptor } from "../data/products";
import { renderStars } from "../utils/renderStars";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { CartContext } from "../context/cartContext";

function ProductDetails() {
  const { addToCart, removeFromCart, isInCart } = useContext(CartContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInterceptor.get(`/product/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  if (!product)
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="spinner-border text-primary" role="status" />
      </div>
    );

  return (
    <div className="py-5">
      <Container className="mt-5">
        <Row className="justify-content-center ">
          <Col md={10} lg={8}>
            <Card className="shadow-sm border-0 py-5">
              <Row className="g-0">
                <Col md={5} className="d-flex align-items-center p-3">
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    alt={product.title}
                    className="img-fluid rounded object-fit-contain"
                    style={{ maxHeight: "300px" }}
                  />
                </Col>

                <Col md={7}>
                  <Card.Body>
                    <Card.Title className="fs-4 mb-3">
                      {product.title}
                    </Card.Title>

                    <div className="mb-2 text-muted d-flex align-items-center gap-2">
                      {renderStars(product.rating)}
                      <span>{product.rating}</span>
                    </div>

                    <Card.Text className="mb-3">
                      {product.description}
                    </Card.Text>

                    <h5>
                      Price: <Badge bg="secondary">${product.price}</Badge>
                    </h5>

                    <p className="mt-2">
                      <strong>Stock:</strong> {product.stock}
                    </p>

                    <div className="mt-4">
                      {isInCart(product.id) ? (
                        <Button
                          variant="danger"
                          className="w-100"
                          onClick={() => {
                            removeFromCart(product.id);
                          }}
                        >
                          Remove from Cart
                        </Button>
                      ) : (
                        <Button
                          variant="success"
                          className="w-100"
                          onClick={() => {
                            addToCart(product);
                          }}
                        >
                          Add to Cart
                        </Button>
                      )}
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProductDetails;
