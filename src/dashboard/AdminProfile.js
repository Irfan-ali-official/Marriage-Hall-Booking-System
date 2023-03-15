import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Colors from "../components/Colors";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import { Formik } from "formik";
import * as Yup from "yup";
import background from "../assets/bg3.jpg";

function AdminProfile() {
  return (
    <>
      <Header />

      <div>
        {/*New Registrations code  */}
        <div className="content-wrapper">
          <section className="col-lg-12 ">
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
                    Edit Profile
                  </span>
                </h1>
              </div>
              <Card>
                {" "}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <img style={{ borderRadius:25,marginBottom:"5%"}}  src={background}  width="200"  height="150" alt="Profile Pic" /> */}
                </div>
                <Formik
                  initialValues={{
                    password: "",
                    newPass: "",
                  }}
                  onSubmit={(values) => {
                    //  console.log(values)

                    const value = {
                      old_password: values.password,
                      new_password: values.newPass,
                    };

                    const token = localStorage.getItem("token");
                    fetch(
                      `https://bluejay-mobile-app.herokuapp.com/admin/changePassword`,
                      {
                        method: "post",
                        body: JSON.stringify(value),
                        headers: {
                          Accept: "application/json, text/plain, */*",
                          "Content-Type": "application/json",
                          token,
                        },
                      }
                    )
                      .then((res) => res.json())
                      .then((result) => {
                        console.log(result);
                      })
                      .catch((err) => console.log(err.message));
                  }}
                  validationSchema={Yup.object().shape({
                    password: Yup.string()
                      .min(6, "Password must be 6 characters at minimum")
                      .required("Current Password is required"),
                    newPass: Yup.string()
                      .min(6, "Password must be 6 characters at minimum")
                      .required("New Password is required"),
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          flexDirection: "column",
                        }}
                      >
                        {/* <FloatingLabel controlId="floatingInput" label="Name"   className="mb-3"  >
          <Form.Control style={{width:300}} type="email" name='email' placeholder="name@example.com" onBlur={handleBlur} onChange={handleChange} value={values.email} /> 
          </FloatingLabel>
          {touched.email && errors.email ? <div className='error' style={{  fontSize: 15, color: 'red', marginBottom:"2%"}}> {errors.email}</div> : null}
         */}
                        <FloatingLabel
                          controlId="floatingInput"
                          label="Current Password"
                          className="mb-3"
                        >
                          <Form.Control
                            style={{ width: 300 }}
                            type="password"
                            name="password"
                            placeholder="......"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.password}
                          />
                        </FloatingLabel>
                        {touched.password && errors.password ? (
                          <div
                            className="error"
                            style={{
                              fontSize: 15,
                              color: "red",
                              marginBottom: "2%",
                            }}
                          >
                            {" "}
                            {errors.password}
                          </div>
                        ) : null}

                        <FloatingLabel
                          controlId="floatingInput"
                          label="New Password"
                          className="mb-3"
                        >
                          <Form.Control
                            style={{ width: 300 }}
                            type="password"
                            name="newPass"
                            placeholder="......"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.newPass}
                          />
                        </FloatingLabel>
                        {touched.newPass && errors.newPass ? (
                          <div
                            className="error"
                            style={{
                              fontSize: 15,
                              color: "red",
                              marginBottom: "2%",
                            }}
                          >
                            {" "}
                            {errors.newPass}
                          </div>
                        ) : null}
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          marginTop: "1%",
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
                            width: "30%",
                          }}
                        >
                          Update
                        </Button>
                      </div>
                    </form>
                  )}
                </Formik>
              </Card>
            </div>
          </section>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default AdminProfile;
