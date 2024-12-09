import { useContext, useState, useEffect } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export default function EditTodo() {
  const { id } = useParams();
  const { todos, setTodos } = useContext(TodoContext);
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const todo = todos.find((todo) => todo.id === parseInt(id));
    if (todo) {
      setTitle(todo.title);
      setDescription(todo.description);
      setCompleted(todo.completed);
    }
  }, [todos, id]);

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = { id: parseInt(id), title, description, completed };
    const updatedTodos = todos.map((todo) =>
      todo.id === parseInt(id) ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    navigate("/");
  };

  return (
    <div>
      <h1>Edit Todo</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Completed"
            checked={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
}