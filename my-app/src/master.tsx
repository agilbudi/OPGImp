import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {


  return (
    <>
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
            <h1 className="mb-4">OPG App</h1>
        </Col>
      </Row>
    </Container>
    </>
  );
}
