import { useContext } from "react";
import { Badge, Button, Card, Col, Container, Row } from "react-bootstrap";
import { TodoContext } from "../contexts/TodoContext";
import { Link } from "react-router-dom";

export default function Home() {
  const { todos, setTodos } = useContext(TodoContext);

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Container>
      <h1 className="my-3">Your Todos</h1>
      <Row>
        <CardGroup todos={todos} handleDelete={handleDelete} />
      </Row>
    </Container>
  );
}

function CardGroup({ todos, handleDelete }) {
  return todos.map((todo) => {
    const completed = todo.completed;
    const bg = completed ? "success" : "danger";
    return (
      <Col md={4} key={todo.id}>
        <Card className="my-3">
          <Card.Body>
            <Card.Title>{todo.title}</Card.Title>
            <Card.Text>{todo.description}</Card.Text>
            <div className="d-flex align-items-center justify-content-between">
              <Badge bg={bg}>{!completed && "Not"} Completed</Badge>
              <div>
                <Link to={`/edit/${todo.id}`}>
                  <Button variant="primary" size="sm" className="me-1">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  });
}