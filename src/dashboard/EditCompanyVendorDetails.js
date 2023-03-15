import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Card from "react-bootstrap/Card";
import Colors from "../components/Colors";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import background from "../assets/bg3.jpg";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPhone,
  faInbox,
  faCity,
  faUser,
  faBuilding,
  aMoneyBill1,
  faLocation,
  faBuildingColumns,
  faTimes,
  faTasks,
  faMoneyCheck,
  faAddressBook,
  faMailBulk,
  faMailForward,
  faMailReply,
  faMoneyBill1,
  faDollarSign,
  faHourglassHalf,
} from "@fortawesome/free-solid-svg-icons";

export default function EditCompanyVendorDetails() {
  return (
    <>
      {/* <Header/> */}
      <Header />

      <div>
        {" "}
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <Container>
                  <Row style={{ marginTop: "2%" }}>
                    <Col xs={4}>
                      <Card>
                        {" "}
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <img
                            style={{ borderRadius: 25, marginBottom: "5%" }}
                            src={background}
                            width="300"
                            height="150"
                            alt="Profile Pic"
                          />
                        </div>
                        <Card.Body>
                          <div style={{ marginBottom: "8%" }}>
                            {" "}
                            <span style={{ color: Colors.grey, fontSize: 20 }}>
                              {" "}
                              Hall Details
                            </span>
                            <div style={{ marginTop: "3%", fontSize: 14 }}>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faHome}
                                  className="nav-icon"
                                />{" "}
                                Floral Weddings
                              </p>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faBuildingColumns}
                                  className="nav-icon"
                                />{" "}
                                Hall
                              </p>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faLocation}
                                  className="nav-icon"
                                />{" "}
                                Sukkur
                              </p>
                            </div>
                          </div>

                          <div style={{ marginBottom: "8%" }}>
                            {" "}
                            <span style={{ color: Colors.grey, fontSize: 20 }}>
                              {" "}
                              Contact Details
                            </span>
                            <div style={{ marginTop: "2%", fontSize: 14 }}>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faMailBulk}
                                  className="nav-icon"
                                />{" "}
                                loang@gmail.com
                              </p>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faPhone}
                                  className="nav-icon"
                                />{" "}
                                03043534545
                              </p>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faCity}
                                  className="nav-icon"
                                />{" "}
                                New Street, Sukkur
                              </p>
                            </div>
                          </div>

                          <div>
                            {" "}
                            <span style={{ color: Colors.grey, fontSize: 20 }}>
                              {" "}
                              Service
                            </span>
                            <div style={{ marginTop: "2%", fontSize: 14 }}>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faTasks}
                                  className="nav-icon"
                                />{" "}
                                Photography, Catering, Venue, Decoration
                              </p>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faHourglassHalf}
                                  className="nav-icon"
                                />{" "}
                                12 Hours
                              </p>
                              <p>
                                {" "}
                                <FontAwesomeIcon
                                  icon={faDollarSign}
                                  className="nav-icon"
                                />{" "}
                                Above 1000000
                              </p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card>
                        <Card.Header
                          style={{
                            color: Colors.dark,
                            fontStyle: "oblique",
                            fontSize: 25,
                          }}
                        >
                          <span
                            style={{
                              color: Colors.primary,
                              fontWeight: "bold",
                              fontSize: 25,
                            }}
                          >
                            {" "}
                            Edit
                          </span>
                        </Card.Header>
                        <Card.Body style={{ marginTop: "3%" }}>
                          <Formik
                            initialValues={{
                              businessName: "",
                              businessType: "",
                              services: "",
                              city: "",
                              priceRange: "",
                              availabilityHours: "",
                            }}
                            onSubmit={(values) => {
                              console.log(values);
                            }}
                            validationSchema={Yup.object().shape({
                              businessName: Yup.string().required(
                                "Business Name is required"
                              ),
                              businessType: Yup.string().required(
                                "Business Type is required"
                              ),
                              phone_no: Yup.number()
                                .min(11, "min 11 digits are required")
                                .required("Phone Number is required."),
                              city: Yup.string().required("City is required."),
                              services: Yup.string().required(
                                "Service is required."
                              ),
                              priceRange: Yup.string().required(
                                "Price Range is required."
                              ),
                              availabilityHours: Yup.string().required(
                                "Available hours required"
                              ),
                            })}
                          >
                            {({
                              touched,
                              errors,
                              handleSubmit,
                              handleBlur,
                              values,
                              handleChange,
                            }) => (
                              <form onSubmit={handleSubmit}>
                                <div style={{ marginBottom: "5%" }}>
                                  <Form.Label>Hall Name </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="businessName"
                                    placeholder="Edit Business Name"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.businessName}
                                  />
                                  {touched.businessName &&
                                  errors.businessName ? (
                                    <div
                                      className="error"
                                      style={{
                                        fontSize: 15,
                                        color: "red",
                                        marginBottom: "2%",
                                      }}
                                    >
                                      {" "}
                                      {errors.businessName}
                                    </div>
                                  ) : null}
                                </div>

                                <div style={{ marginBottom: "5%" }}>
                                  <Form.Label>Business Type </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="businessType"
                                    placeholder="Edit Business Type (Vendor/Company)"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.businessType}
                                  />
                                  {touched.businessType &&
                                  errors.businessType ? (
                                    <div
                                      className="error"
                                      style={{
                                        fontSize: 15,
                                        color: "red",
                                        marginBottom: "2%",
                                      }}
                                    >
                                      {" "}
                                      {errors.businessType}
                                    </div>
                                  ) : null}
                                </div>

                                <div style={{ marginBottom: "5%" }}>
                                  <Form.Label>Services </Form.Label>
                                  <Form.Control
                                    type="text"
                                    name="services"
                                    placeholder="Edit Services"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.services}
                                  />
                                  {touched.services && errors.services ? (
                                    <div
                                      className="error"
                                      style={{
                                        fontSize: 15,
                                        color: "red",
                                        marginBottom: "2%",
                                      }}
                                    >
                                      {" "}
                                      {errors.services}
                                    </div>
                                  ) : null}
                                </div>

                                <div style={{ marginBottom: "5%" }}>
                                  <Form.Label>Price Range </Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="priceRange"
                                    placeholder="Edit Price Range "
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.priceRange}
                                  />
                                  {touched.priceRange && errors.priceRange ? (
                                    <div
                                      className="error"
                                      style={{
                                        fontSize: 15,
                                        color: "red",
                                        marginBottom: "2%",
                                      }}
                                    >
                                      {" "}
                                      {errors.priceRange}
                                    </div>
                                  ) : null}
                                </div>

                                <div style={{ marginBottom: "2%" }}>
                                  <Form.Label>Availability Hours</Form.Label>
                                  <Form.Control
                                    type="number"
                                    name="availabilityHours"
                                    placeholder="Edit Price Range"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    value={values.availabilityHours}
                                  />
                                  {touched.availabilityHours &&
                                  errors.availabilityHours ? (
                                    <div
                                      className="error"
                                      style={{
                                        fontSize: 15,
                                        color: "red",
                                        marginBottom: "2%",
                                      }}
                                    >
                                      {" "}
                                      {errors.availabilityHours}
                                    </div>
                                  ) : null}
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginTop: "9%",
                                  }}
                                >
                                  <Button
                                    type="submit"
                                    id="sub_butt"
                                    style={{
                                      borderColor: Colors.white,
                                      borderRadius: 20,
                                      backgroundColor: Colors.primary,
                                      borderWidth: 4,
                                      width: "40%",
                                    }}
                                  >
                                    Update
                                  </Button>
                                </div>
                              </form>
                            )}
                          </Formik>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
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
