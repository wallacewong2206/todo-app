import { useContext, useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);
  const { todos, setTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="text-center mb-4">
            <h1>Add Todo</h1>
          </div>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              setTodos([
                ...todos,
                { id: Date.now(), title, description, completed },
              ]);
              navigate("/");
            }}
          >
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Get software developer job done"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                value={description}
                onChange={(e) => {
                    setDescription(e.target.value);
                    e.target.style.height = "auto";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                }}
                as="textarea"
                placeholder={`1. Create a todo list app\n2. Learn React\n3. Apply for jobs`}
                required
                style={{
                    overflow: "auto",
                    maxHeight: "200px",
                }}
             />
            </Form.Group>
            <Form.Check
              type="checkbox"
              id="Completed"
              label="Marks as completed"
              checked={completed}
              onChange={(e) => setCompleted(e.target.checked)}
              className="mb-3"
            />
            <div className="d-grid">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
