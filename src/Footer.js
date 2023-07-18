import React from 'react'
import Container from 'react-bootstrap/Container';
import {Row} from 'react-bootstrap/';
import {Col} from 'react-bootstrap/';
// import '../src/Footer.css';

export default function footer() {
  return (
    <div>
      <Container fluid>
        <Row className="footer">
          <Col  md={{ span: 4, offset: 4 }}>
          <h1>This to do list is created by ARYAN KOHLI </h1>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
