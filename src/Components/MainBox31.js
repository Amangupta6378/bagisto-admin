import { Container } from "@mui/material";
import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const MainBox31 = () => {
  return (
    <Container className="mainbox31">
      <Row>
        <Row className="mt-2">
          <Col>
            <h6>$25</h6>
            <p>21 Mar 2024, 09:22:47</p>
            <button className="mainbox31-button">Processing</button>
          </Col>
          <Col>
            <h5>$87.99</h5>
            <p>Cash On Delivery</p>
            <p>Default</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col>
            <h6>John Doe</h6>
            <p>john@example.com</p>
            <p>Featherstone, United Kingdom</p>
          </Col>
          <Col>
            <img
              width="70px"
              src="https://demo.bagisto.com/bagisto-common/storage/product/59/ifkPboTqNbmEaDE0Oiceb2gp518QoV6ISyfh24pL.webp"
            ></img>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default MainBox31;
