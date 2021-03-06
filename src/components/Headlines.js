import React from "react";
import { Col, Container, Row, Card, Button, Badge } from "react-bootstrap";

const Headlines = (data) => {
  return (
    <Container className="top-headlines">
      <Row>
        {data.data.map((item) => (
          <Col className="headlines-cover" key={item.url} md={4}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={item.urlToImage} height="250px" />
              <Card.Body>
                <Badge bg="success">{item.source.name}</Badge>
                <Card.Title>
                  {item.title ? item.title.slice(0, 45) + "...." : ""}{" "}
                </Card.Title>
                <Card.Text>
                  {item.description
                    ? item.description.slice(0, 115) + "...."
                    : ""}
                  <p>
                    <small className="text-muted">
                      By{item.author ? " " + item.author : "  unknown"} on{" "}
                      {item.publishedAt
                        ? new Date(item.publishedAt).toGMTString()
                        : "-"}
                    </small>
                  </p>
                </Card.Text>
                <Button variant="primary" href={item.url} target="_blank">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Headlines;
