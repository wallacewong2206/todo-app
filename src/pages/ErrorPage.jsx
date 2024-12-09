import { Container } from "react-bootstrap";

export default function ErrorPage() {
    return (
        <Container>
            <h1 className="my-3">Oops 404!</h1>
            <p>Page not found</p>
        </Container>
    );
}