import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Sidebar from "./Sidebar";
import "../Css/Main.css";
import MainBox1 from "./MainBox1";
import MainBox2 from "./MainBox2";
import MainBox3 from "./Mainbox3";
import Mainbox4 from "./Mainbox4";
// import BasicExample from "./Navbar";
// import BasicExample from "./Accordian";

const Main = () => {
  return (
    <div className="main-main">
      <Container fluid>
        <Row>
          <Col xs="3">
            <Sidebar></Sidebar>
          </Col>

          <Col>
            <Row className="Main-box pt-4">
              <Col className="column1 ">
                <h5>Hi ! Example</h5>
                <p>Quickly Review what’s going on in your store</p>
              </Col>
              <Col>
                <input className="column2 px-3 py-2 " type="date"></input>
                <input className="column2 px-3 py-2 ms-2" type="date"></input>
              </Col>
            </Row>
            <Row>
              <Col className="main-box1 mt-4" xs lg="7"  style={{ height: "calc(100vh - 250px)", overflowY: "auto" }}>
                <div>
                  <div className="overall">
                    <h5>Overall</h5>
                  </div>
                  <MainBox1 />
                </div>
                <div>
                  <div className="overall mt-5">
                    <h5 className="">Todays Details</h5>
                  </div>
                  <MainBox3 />
                </div>
                <div>
                  <div className="overall mt-5">
                    <h5>Stock Threshold</h5>
                  </div>
                  <Mainbox4 />
                </div>
              </Col>
              <Col className="main-box2 ms-3 mt-4" xs lg="4">
                <div className="overall">
                  <h5>Store Stats</h5>
                </div>
                <MainBox2 />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
