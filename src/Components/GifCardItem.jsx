import React from "react";
import { Container, Card, CardGroup,Row } from "react-bootstrap";
export default function GifCardItem({ title, url }) {
  return (
    <Container className="my-5 ">
    <Row xs={1} md={2} className="g-4">
        <CardGroup>
        <Card className="animate__animated animate__bounce bg-dark text-white">
          <Card.Img src={url} alt="Card image" />
          <Card.ImgOverlay>
            <Card.Title>{title}</Card.Title>
          </Card.ImgOverlay>
        </Card>
      </CardGroup>

    </Row>
   
        </Container>
  );
}
