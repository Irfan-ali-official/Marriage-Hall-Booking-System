import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Menu from "./Menu";
import Header from "./Header";
import Colors from "../components/Colors";
import background from "../assets/bg3.jpg";

function NewCVDetails() {
  return (
    <>
      <Header />

      <div>
        {/*New Registrations code  */}
        <div className="content-wrapper">
          <section className="col-lg-12 connectedSortable">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header">
                <h1 className="card-title">
                  <i
                    className="ion ion-clipboard mr-1"
                    style={{ fontSize: 30 }}
                  />
                  <span
                    style={{
                      color: Colors.primary,
                      fontWeight: "bold",
                      fontSize: 25,
                    }}
                  >
                    Details
                  </span>
                </h1>
              </div>
              {/* /.card-header */}
              {/* card body */}
              <div className=" card-body ">
                <Container>
                  <Form>
                    <Row>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginBottom: "2%",
                        }}
                      >
                        <img
                          style={{ borderRadius: 20 }}
                          src={background}
                          width="400"
                          height="150"
                          alt="step1"
                        />
                      </div>
                    </Row>

                    <Row>
                      {" "}
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Marriage Hall Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Business Name"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Hall Type</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Business Type"
                          />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Email address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter email"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Services</Form.Label>
                          <Form.Control type="text" placeholder="Services" />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Phone Numbere"
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>City</Form.Label>
                          <Form.Control type="text" placeholder="City" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Address</Form.Label>
                          <Form.Control type="text" placeholder="Address" />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Price Range</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Price Range"
                          />
                        </Form.Group>
                      </Col>

                      <Col>
                        <Form.Group className="mb-3">
                          <Form.Label>Availability Hours</Form.Label>
                          <Form.Control
                            type="number"
                            placeholder="Availability Hours"
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <div style={{ marginLeft: "40%" }}>
                          <Button
                            type="submit"
                            style={{
                              borderColor: Colors.white,
                              borderRadius: 20,
                              backgroundColor: Colors.primary,
                              borderWidth: 4,
                              width: "40%",
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Container>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default NewCVDetails;
