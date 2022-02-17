import React from 'react';
import { Card , Container , Col , Row } from 'react-bootstrap'
import './Cards.css'

function Cards(){
  return (
    <Container>
    <div class="Cards">
      <Row>
        <Col>
          <Card className="Card">
            <Card.Body>
              <Card.Title>TCI</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Project</Card.Subtitle>
              <Card.Text>
                Teacher Index Capacity - webapp which helps teachers to analys their skills.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="Card">
            <Card.Body>
              <Card.Title>Reach</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Internship</Card.Subtitle>
              <Card.Text>
                REACH - educational webapp , which helps teachers to make classes more productive.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card className="Card">
          <Card.Body>
            <Card.Title>NurOrda Fantasy</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">School Project</Card.Subtitle>
            <Card.Text>
              NurOrda Fantasy - clone of the Premier League Fantasy. But the players are school students.
            </Card.Text>
          </Card.Body>
        </Card>
                </Col>
        </Row>
    </div>
  </Container>
  )
}

export default Cards;
