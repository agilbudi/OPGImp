import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function App() {
  const [inisial, setInisial] = useState('');


  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
            <h1 className="mb-4">OPG App</h1>
            <h4 className="mb-4">Inisial: {inisial}</h4>
        </Col>
      </Row>
    </Container>
  );
}
