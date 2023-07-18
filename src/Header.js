import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {Col} from 'react-bootstrap/';
export default function header() {
  return (
    <div className="header">
      <Container>

      <Row>
        <Col md={{ span: 8, offset: 2 }}>
        <h1 >THIS IS A TODO LIST MADE BY ARYAN KOHLI</h1>
        </Col>
      </Row>
      </Container>
    </div>
  )
}
