import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function App() {
  const [inisial, setInisial] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Inisial:', inisial)
    alert(`Inisial yang dimasukkan: ${inisial}`);
  }
  

  return (
    <>
      <Container className="mt-5 p-5">
        <h1 className="mb-4">OPG App</h1>
        <Row>
          <Col>kiri</Col>
          <Col>
          <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formInisial">
                  <Form.Label>Inisial</Form.Label>
                  <Form.Control 
                    placeholder="Inisial Opg"
                    value={inisial}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInisial(e.target.value)}
                  />
                  <Form.Text className="text-muted">
                    masukan inisial Mu.
                  </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
            </Form>
          </div>
          </Col>
          <Col>kanan</Col>
        </Row>
      </Container>
    </>
  )
}

export default App
