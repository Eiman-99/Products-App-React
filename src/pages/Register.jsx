import { useForm } from "react-hook-form";
import { Form, Button, Container, Card } from "react-bootstrap";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Registered Data:", data);
    alert("Registered Successfully!");
  };

  const password = watch("password");

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card
        style={{
          width: "100%",
          maxWidth: "500px",
          boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        }}
        className="p-4"
      >
        <h3 className="text-center mb-4">Register</h3>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              isInvalid={!!errors.username}
              {...register("username", {
                required: "Username is required",
                validate: (value) =>
                  !/\s/.test(value) || "Username should not contain spaces",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.username?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              isInvalid={!!errors.email}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email format",
                },
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              isInvalid={!!errors.password}
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])/,
                  message:
                    "Must include 1 uppercase, 1 number, and 1 special character",
                },
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm password"
              isInvalid={!!errors.confirmPassword}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword?.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address"
              {...register("address")}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">
            Register
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Register;
