import Footer from "../components/layouts/Footer";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Colors from "./Colors";
import GeneralNav from "./layouts/GeneralNav";

//images
import background from "../assets/bg3.jpg";
import step1 from "../assets/pic1.PNG";
import Step2 from "../assets/pic2.PNG";
import Step3 from "../assets/pic3.PNG";
import Step4 from "../assets/pic4.png";
import advantage from "../assets/advantage.png";
import tic from "../assets/tic.png";
import Alert from "react-bootstrap/Alert";
import { FormLabel } from "react-bootstrap";

export default function Register() {
  const [type, setType] = useState(null);
  const [checkedV, setCheckedV] = useState(false);
  const [checkedD, setCheckedD] = useState(false);
  const [checkedC, setCheckedC] = useState(false);
  const [checkedP, setCheckedP] = useState(false);
  const [formState, setFormState] = useState(false);
  const [error, setError] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    if (type === "Company") {
      var services_string = "";
      // console.log(data)

      if (checkedC) {
        services_string += "Catering ";
      }
      if (checkedV) {
        services_string += "Venue ";
      }
      if (checkedD) {
        services_string += "Decoration ";
      }
      if (checkedP) {
        services_string += "Photography ";
      }

      const value = {
        company_name: data.company_name,
        email: data.email,
        password: data.password,
        phone_no: data.phone_no,
        city: data.city,
        services: services_string,
        price_range: data.price_range,
        address: data.address,
        available_hours: data.available_hours,
      };

      console.log(value);

      fetch(`https://bluejay-mobile-app.herokuapp.com/company/signUp`, {
        method: "post",
        body: JSON.stringify(value),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.status == "ok") {
            setFormState(true);
          } else {
            setError(true);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    } else if (type === "Vendor") {
      var services_string = "";
      // console.log(data)

      if (checkedC) {
        services_string = "Caterer";
      }
      if (checkedV) {
        services_string = "Venue";
      }
      if (checkedD) {
        services_string = "Decoration";
      }
      if (checkedP) {
        services_string = "Photography";
      }

      const value = {
        vendor_name: data.company_name,
        email: data.email,
        password: data.password,
        phone_no: data.phone_no,
        city: data.city,
        service: services_string,
        price_range: data.price_range,
        address: data.address,
        available_hours: data.available_hours,
      };

      console.log(value);

      fetch(`https://bluejay-mobile-app.herokuapp.com/vendor/signUp`, {
        method: "post",
        body: JSON.stringify(value),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          if (result.status == "ok") {
            setFormState(true);
          } else {
            setError(true);
          }
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  //type is role vendor or company
  // console.log("type is",type)
  // console.log("services are",myService)

  //dynamic selection of checkbox and radio box
  let companyOption = false;
  let vendorOption = false;
  let option = "checkbox";
  if (type === "Company") {
    option = "checkbox";
    companyOption = true;
    // console.log("inside company option",  option)
  } else if (type === "Vendor") {
    option = "radio";
    vendorOption = true;
    // console.log("inside vendor option", option )
  }

  // console.log(option)

  // errors styling
  const errorsStyle = {
    color: "red",
    padding: "2px",
    fontFamily: "Arial",
  };

  return (
    <div style={{ backgroundColor: "#ecd1c4" }}>
      <GeneralNav />
      <section
        className="col col-sm-12 col-md-12"
        style={{ backgroundImage: `url(${background})` }}
      >
        <Container>
          <Row>
            {/* 1st column */}
            <Col
              xs={4}
              style={{
                color: Colors.white,
                fontWeight: "bold",
                marginTop: "17%",
                marginLeft: "4%",
              }}
            >
              <h3 style={{ marginBottom: "10%", fontSize: 35 }}>
                {" "}
                PARTNER WITH US
              </h3>
              <span style={{ fontSize: 20 }}>
                {" "}
                We aim to get people in touch with event planner companies and
                companies with vendors to book and execute event successfully.
                <br />
                <br />
                Marriage Hall Event Planners is national, fast-growing business
                that maintains its appeal as localised service with community
                ambition.
              </span>
            </Col>

            {/* Form  */}

            <Col
              style={{
                backgroundColor: Colors.white,
                margin: "3%",
                borderRadius: 8,
              }}
            >
              <h5 style={{ margin: "7%", fontSize: 24 }}>
                Interested? Fill in the form below to become our partner and
                increase your revenue!
              </h5>

              <form id="form" onSubmit={handleSubmit(onSubmit)}>
                <FloatingLabel
                  style={{ marginTop: "2%" }}
                  controlId="floatingInput1"
                  label="Marriage Hall Name"
                  className="mb-2"
                >
                  <Form.Control
                    placeholder="Marriage Hall Name"
                    aria-label="company_name"
                    aria-describedby="basic-addon1"
                    {...register("company_name", { required: true })}
                  />
                  <div style={errorsStyle}>
                    {errors.company_name?.type === "required" &&
                      "Business Name is required"}
                  </div>
                </FloatingLabel>

                <FloatingLabel
                  style={{ marginTop: "2%" }}
                  controlId="floatingInput2"
                  label="Email"
                  className="mb-3"
                >
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    {...register("email", { required: true })}
                  />
                  <div style={errorsStyle}>
                    {errors.email?.type === "required" && "Email is required"}
                  </div>
                </FloatingLabel>

                <FloatingLabel
                  controlId="floatingSelect"
                  label="Hall Type"
                  style={{ Color: Colors.dark }}
                >
                  <Form.Select
                    value={type}
                    aria-label="Business Type"
                    aria-describedby="basic-addon1"
                    onChange={(e) => setType(e.target.value || null)}
                  >
                    <option value="null">None</option>
                    <option value="Hall">Marrige Hall</option>
                    <option value="Owner">Owners</option>
                  </Form.Select>
                  {/* <div style={errorsStyle}>{errors.business_type?.type === "required"  && "Business type  is required" }</div> */}
                </FloatingLabel>

                {/* Company Services */}
                {companyOption && (
                  <div>
                    <FormLabel style={{ Color: Colors.dark, fontSize: 15 }}>
                      {" "}
                      Select Services
                    </FormLabel>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      <Form.Check
                        type="checkbox"
                        label="Venue"
                        value="Venue"
                        onChange={(e) => {
                          if (!checkedV) {
                            setCheckedV(!checkedV);
                          } else {
                            setCheckedV(!checkedV);
                          }
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Decoration"
                        value="Decoration"
                        onChange={(e) => {
                          if (!checkedD) {
                            setCheckedD(!checkedD);
                          } else {
                            setCheckedD(!checkedD);
                          }
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Catering"
                        value="Catering"
                        onChange={(e) => {
                          if (!checkedC) {
                            setCheckedC(!checkedC);
                          } else {
                            setCheckedC(!checkedC);
                          }
                        }}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Photography"
                        value="Photography"
                        onChange={(e) => {
                          if (!checkedP) {
                            setCheckedP(!checkedP);
                          } else {
                            setCheckedP(!checkedP);
                          }
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Vendor Service */}
                {vendorOption && (
                  <div>
                    <FormLabel style={{ Color: Colors.dark, fontSize: 15 }}>
                      {" "}
                      Select a Service
                    </FormLabel>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        fontSize: 15,
                        fontWeight: "bold",
                      }}
                    >
                      <ButtonGroup aria-label="Basic example">
                        <Form.Check
                          name="group1"
                          type="radio"
                          label="Venue"
                          value="Venue"
                          onChange={(e) => {
                            if (!checkedV) {
                              setCheckedV(!checkedV);
                            } else {
                              setCheckedV(!checkedV);
                            }
                          }}
                        />
                        <Form.Check
                          name="group1"
                          type="radio"
                          label="Decoration"
                          value="Decoration"
                          onChange={(e) => {
                            if (!checkedD) {
                              setCheckedD(!checkedD);
                            } else {
                              setCheckedD(!checkedD);
                            }
                          }}
                        />
                        <Form.Check
                          name="group1"
                          type="radio"
                          label="Catering"
                          value="Catering"
                          onChange={(e) => {
                            if (!checkedC) {
                              setCheckedC(!checkedC);
                            } else {
                              setCheckedC(!checkedC);
                            }
                          }}
                        />
                        <Form.Check
                          name="group1"
                          type="radio"
                          label="Photography"
                          value="Photography"
                          onChange={(e) => {
                            if (!checkedP) {
                              setCheckedP(!checkedP);
                            } else {
                              setCheckedP(!checkedP);
                            }
                          }}
                        />
                      </ButtonGroup>
                    </div>
                  </div>
                )}

                <FloatingLabel
                  style={{ marginTop: "2%" }}
                  controlId="floatingInput3 formPlaintextPassword"
                  label="Password"
                  className="mb-3"
                >
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    aria-label="password"
                    aria-describedby="basic-addon1"
                    {...register("password", { required: true, minLength: 6 })}
                  />
                  <div style={errorsStyle}>
                    {errors.password?.type === "required" &&
                      "Password is required"}
                  </div>
                  <div style={errorsStyle}>
                    {" "}
                    {errors.password?.type === "minLength" &&
                      "At least 6 characters are required"}
                  </div>
                </FloatingLabel>

                <FloatingLabel
                  style={{ marginTop: "2%" }}
                  controlId="floatingInput4 "
                  label="Phone Number"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Phone Number"
                    aria-label="Phone Number"
                    aria-describedby="basic-addon1"
                    {...register("phone_no", {
                      required: true,
                      minLength: 11,
                      maxLength: 12,
                    })}
                  />
                  <div style={errorsStyle}>
                    {errors.phone_no?.type === "required" &&
                      "Phone number is required"}
                  </div>
                  <div style={errorsStyle}>
                    {errors.phone_no?.type === "minLength" &&
                      "At least 11 characters are required"}
                  </div>
                  <div style={errorsStyle}>
                    {errors.phone_no?.type === "maxLength" &&
                      "Max Length Exceed"}
                  </div>
                </FloatingLabel>

                <FloatingLabel
                  style={{ marginTop: "2%" }}
                  controlId="floatingInput5 "
                  label="City"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="City"
                    aria-label="city"
                    aria-describedby="basic-addon1"
                    {...register("city", { required: true })}
                  />
                  <div style={errorsStyle}>
                    {errors.city?.type === "required" && "City is required"}
                  </div>
                </FloatingLabel>

                <FloatingLabel
                  style={{ marginTop: "2%" }}
                  controlId="floatingInput6 "
                  label="Address"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Address"
                    aria-label="address"
                    aria-describedby="basic-addon1"
                    {...register("address", { required: true })}
                  />
                  <div style={errorsStyle}>
                    {errors.address?.type === "required" &&
                      "Address is required"}
                  </div>
                </FloatingLabel>

                <FloatingLabel
                  style={{ marginTop: "2%" }}
                  controlId="floatingInput7 "
                  label="Price Range"
                  className="mb-3"
                >
                  <Form.Control
                    type="number"
                    placeholder="Price Range"
                    aria-label="price_range"
                    aria-describedby="basic-addon1"
                    {...register("price_range", { required: true })}
                  />
                  <div style={errorsStyle}>
                    {errors.price_range?.type === "required" &&
                      "Price Range is required"}
                  </div>
                </FloatingLabel>

                <FloatingLabel
                  style={{ marginTop: "2%" }}
                  controlId="floatingInput8 "
                  label="Availability Hours"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Availability Hours"
                    aria-label="availability_hours"
                    aria-describedby="basic-addon1"
                    {...register("available_hours", { required: true })}
                  />
                  <div style={errorsStyle}>
                    {errors.available_hours?.type === "required" &&
                      "Available hours are required"}
                  </div>
                  <div style={errorsStyle}>
                    {errors.available_hours?.type === "maxLength" &&
                      "Max Length Exceed"}
                  </div>
                </FloatingLabel>
                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                    style={{ fontSize: 15 }}
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button
                    size="lg"
                    type="submit"
                    style={{
                      marginBottom: "2%",
                      color: Colors.white,
                      backgroundColor: Colors.primary,
                      borderColor: Colors.primary,
                    }}
                  >
                    {" "}
                    Submit
                  </Button>
                  {formState && (
                    <Alert
                      style={{
                        marginLeft: "1%",
                        marginTop: "1%",
                        color: Colors.white,
                        backgroundColor: Colors.mainColor,
                      }}
                      key="success"
                    >
                      Form Submitted Successfully!
                    </Alert>
                  )}
                  {error && (
                    <Alert
                      style={{
                        marginLeft: "1%",
                        marginTop: "1%",
                        color: Colors.white,
                        backgroundColor: Colors.error,
                      }}
                      key="error"
                    >
                      Error! Submit again with correct Information
                    </Alert>
                  )}
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </section>

      <div
        style={{
          display: "flex",
          color: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: 30 }}>
          Steps to Activation
        </h1>
      </div>

      <Container>
        <Row style={{ marginTop: "5%" }}>
          <Col>
            <img src={step1} alt="step1" width="50" height="50" />
          </Col>
          <Col>
            <img src={Step3} alt="step2" width="50" height="50" />
          </Col>
          <Col>
            <img src={Step2} alt="step3" width="50" height="50" />
          </Col>
          <Col>
            <img src={Step4} alt="step4" width="50" height="50" />
          </Col>
        </Row>

        <Row style={{ marginTop: "2%", fontSize: 16, color: Colors.primary }}>
          <Col>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Step 1:</span>
            <br /> Register online{" "}
          </Col>
          <Col>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Step 2:</span>
            <br /> Marriag Hall Booking System Planners send the contract{" "}
          </Col>
          <Col>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Step 3:</span>
            <br /> Sign the contract{" "}
          </Col>
          <Col>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Step 4:</span>
            <br /> Go live on Marriage Hall Booking System's Mobile app{" "}
          </Col>
        </Row>
      </Container>

      <Container
        style={{
          backgroundColor: Colors.mainColor,
          marginTop: "5%",
          marginBottom: "5%",
        }}
      >
        <Row>
          <Col>
            <img
              src={advantage}
              alt="step1"
              width="290"
              height="270"
              style={{
                margin: "5%",
                marginBottom: "7%",
                marginTop: "7%",
                borderRadius: 20,
              }}
            />
          </Col>
          <Col xs={6}>
            <Row>
              {" "}
              <Col
                style={{
                  color: Colors.white,
                  marginTop: "5%",
                  marginBottom: "5%",
                  fontSize: 26,
                  fontWeight: "bold",
                }}
              >
                {" "}
                Advantage of Joining us{" "}
              </Col>{" "}
            </Row>
            <Row>
              {" "}
              <Col>
                {" "}
                <img
                  src={tic}
                  alt="tic"
                  width="30"
                  height="30"
                  style={{ borderRadius: 24, marginRight: "4%" }}
                />
                <span
                  style={{
                    color: Colors.white,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  More Revenue
                </span>{" "}
                <p
                  style={{
                    color: Colors.white,
                    marginLeft: "10%",
                    fontSize: 16,
                  }}
                >
                  With Marraige Hall Booking System , you will gain an
                  additional source of income.
                </p>{" "}
              </Col>{" "}
            </Row>
            <Row>
              {" "}
              <Col>
                {" "}
                <img
                  src={tic}
                  alt="tic"
                  width="30"
                  height="30"
                  style={{ borderRadius: 24, marginRight: "4%" }}
                />
                <span
                  style={{
                    color: Colors.white,
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                >
                  Dedicated Support{" "}
                </span>{" "}
                <p
                  style={{
                    color: Colors.white,
                    marginLeft: "10%",
                    fontSize: 16,
                  }}
                >
                  From perfecting your services and getting you orders, to
                  improving your performance, we're here to help you every step
                  of the way.
                </p>
              </Col>{" "}
            </Row>
          </Col>
          <Col></Col>
        </Row>
      </Container>

      {/* Our process */}

      <div
        style={{
          display: "flex",
          color: Colors.primary,
          justifyContent: "center",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <h1 style={{ fontWeight: "bold", fontSize: 30 }}>How it works</h1>
      </div>

      <Container>
        <Row style={{ marginTop: "5%" }}>
          <Col>
            {" "}
            <img
              src="/images/process1.jpg"
              width="70"
              height="70"
              alt="step1"
            />
          </Col>
          <Col>
            {" "}
            <img
              src="/images/process2.png"
              width="70"
              height="70"
              alt="step1"
            />
          </Col>
          <Col>
            {" "}
            <img
              src="/images/process3.png"
              width="70"
              height="70"
              alt="step1"
            />
          </Col>
          <Col>
            {" "}
            <img
              src="/images/process4.jpg"
              width="70"
              height="70"
              alt="step1"
            />
          </Col>
        </Row>

        <Row style={{ marginTop: "2%", fontSize: 16, color: Colors.primary }}>
          <Col>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Step 1:</span>
            <br /> Customer select an available company and fill their booking
            form.
          </Col>
          <Col>
            {" "}
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Step 2:</span>
            <br /> Company ask customer to pay advance Company accepts the
            order, and starts searching vendors for needed services .{" "}
          </Col>
          <Col>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Step 3:</span>
            <br /> Company highers vendors for services like food, venue and so
            on{" "}
          </Col>
          <Col>
            <span style={{ fontWeight: "bold", fontSize: 20 }}>Step 4:</span>
            <br /> Company and vendor both together execute the event{" "}
          </Col>
        </Row>
        <Row>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5%",
              fontWeight: "bold",
            }}
          >
            <Button
              href="/register"
              size="lg"
              type="submit"
              style={{
                marginBottom: "2%",
                width: 300,
                color: Colors.white,
                backgroundColor: Colors.mainColor,
                borderColor: Colors.primary,
              }}
            >
              {" "}
              Get Started
            </Button>
          </div>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
