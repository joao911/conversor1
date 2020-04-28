import React from 'react';
import {
  Jumbotron, Button, Form, Col, Spinner, Alert, Modal
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import ListarMoedas from './listar-moedas'

import './App.css';

function App() {
  return (
    <div>
      <Jumbotron>
        <h1>Algum dia direi não foi fácil mas eu consegui!!</h1>
        <Alert variant="danger" show={false}>
          erro obtendo dados de conversão tente novamente
        </Alert>
        <Form>
          <Form.Row>

            <Col sm="3">
              <Form.Control
                placeholder="0"
                value={1}
                required />
            </Col>
            <Col sm="3">
              <Form.Control
                as="select"
              >
                <ListarMoedas/>
              </Form.Control>
            </Col>
            <Col sm="1" className="text-center" style={{ paddingTop: '5px' }}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm="3">
              <Form.Control
                as="select"
              >
                 <ListarMoedas/>
              </Form.Control>
            </Col>
            <Col sm="2">
              <Button variant="success type=" onSubmit>
                <Spinner animation="border" size="3" />
                Converter
              </Button>
            </Col>
          </Form.Row>

        </Form>
        <Modal show={false}>
          <Modal.Header closeButton>
            <Modal.Title>
              conversão
          </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Resultado da conversão aqui...
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success">
              Nova conversão
            </Button>
          </Modal.Footer>
        </Modal>

      </Jumbotron>
    </div>
  );
}

export default App;
