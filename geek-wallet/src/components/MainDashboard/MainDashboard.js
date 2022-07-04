import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import "./style.css";
import placeholder from '../../assets/images/productImg.png'

export default function MainDashboard({ currentPage, handlePageChange }) {
  return (
    <Container className="dashContainer">
      <Row>
        <p className="dashTitle">HOME ARCHIVE</p>
        <hr></hr>
      </Row>
      <Row>
        <Col lg={6}>
          <div className="dashDiv">
            <Button className="dashTagBtn" variant="dark">
              COLLECTION
            </Button>
            <Button className="dashTagBtn" variant="dark">
              WATCHING
            </Button>
            <Button className="dashTagBtn" variant="light">
              TRADE
            </Button>
          </div>
        </Col>
        <Col lg={2}></Col>

        <Col lg={4}>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="dark">Search</Button>
          </Form>
        </Col>

        <br />
      </Row>
      <br/>
      <Row>
        <p>We will map through our products here. Current placeholders</p>

        <Col lg={4}>
          <Card>
            <Card.Img variant="top" src={placeholder} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark" href="/product" onClick={() => handlePageChange('Product')}>See Product</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card>
            <Card.Img variant="top" src={placeholder} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">See Product</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4}>
          <Card >
            <Card.Img variant="top" src={placeholder}/>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="dark">See Product</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </Container>
  );
}
