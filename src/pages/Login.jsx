import { useForm } from "react-hook-form";
import { Form, Button, Container, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login data:", data);
    login();
    navigate("/");
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        style={{
          width: "100%",
          maxWidth: "400px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
        className="p-4"
      >
        <h3 className="text-center mb-4">Login</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group controlId="formEmail" className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              isInvalid={!!errors.email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              isInvalid={!!errors.password}
              {...register("password", {
                required: "Password is required",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
