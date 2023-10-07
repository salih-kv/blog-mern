import React, { useState } from "react";
import "./Login.css";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSumbit = (event) => {
    event.preventDefualt();
    navigate("/");
  };
  return (
    <div>
      <Container>
        <Form className="col-md-8 mt-5">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="col-md-6"
            onClick={handleSumbit}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Login;
