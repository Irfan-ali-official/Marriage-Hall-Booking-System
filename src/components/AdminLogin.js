import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/download.jpg";
import welcomeimg from "../assets/loginimag2.PNG";
import "../Login.css";
import GeneralNav from "./layouts/GeneralNav";
import { Formik, useFormik } from "formik";
import * as Yup from "yup";

function AdminLogin() {
  const navigate = useNavigate();
  return (
    <>
      <GeneralNav />

      <div className="main-login" style={{ marginBottom: "5%" }}>
        <div className="login-contain">
          <div className="left-side">
            <div className="img-class">
              <img
                src={logo}
                id="img-id"
                alt=""
                style={{ marginLeft: "40%" }}
              />
            </div>

            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                const value = {
                  email: values.email,
                  password: values.password,
                };

                // fetch(`https://bluejay-mobile-app.herokuapp.com/admin/logIn`, {
                //   method: "post",
                //   body: JSON.stringify(value),
                //   headers: {
                //     Accept: "application/json, text/plain, */*",
                //     "Content-Type": "application/json",
                //   },
                // })
                const promise = new Promise((resolve, reject) => {
                  setTimeout(() => {
                    resolve(1234);
                  }, 1000);
                });
                promise
                  // .then((res) => res.json())
                  .then((result) => {
                    console.log("resolved");
                    // console.log("success", result);
                    // localStorage.setItem("token", result.token);
                    // console.log(localStorage.getItem("token"));
                    navigate("/dashboard");
                  })
                  .catch((err) =>
                    console.log("Your credentials does not match.")
                  );
              }}
              validationSchema={Yup.object().shape({
                email: Yup.string()
                  .email("Invalid email address format")
                  .required("Email is required"),
                password: Yup.string()
                  .min(6, "Password must be 6 characters at minimum")
                  .required("Password is required"),
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
                  <label htmlFor="emil1" style={{ marginLeft: "15%" }}>
                    Email
                  </label>
                  <input
                    type="text"
                    id="emil1"
                    name="email"
                    placeholder="Enter your email..."
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div
                      className="error"
                      style={{
                        fontSize: 15,
                        color: "red",
                        marginLeft: "15%",
                        marginBottom: "2%",
                      }}
                    >
                      {" "}
                      {errors.email}
                    </div>
                  ) : null}

                  <label htmlFor="pwd1" style={{ marginLeft: "15%" }}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="pwd1"
                    name="password"
                    placeholder="Enter password"
                    autoComplete="false"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div
                      className="error"
                      style={{
                        fontSize: 15,
                        color: "red",
                        marginLeft: "15%",
                        marginBottom: "2%",
                      }}
                    >
                      {" "}
                      {errors.password}
                    </div>
                  ) : null}

                  <button
                    type="submit"
                    id="sub_butt"
                    style={{ marginLeft: "20%", width: "60%" }}
                  >
                    Login
                  </button>
                </form>
              )}
            </Formik>

            <div>
              {/* <h4  style={{marginLeft:'8%',marginTop:'5%',fontSize:20,fontWeight:'bold'}}>Forgot Password? <Link className='link' to='#forgotpass'>Click Here</Link></h4> */}
            </div>
          </div>
          <div className="right-side">
            <div className="welcomeNote">
              <h2>Admin Login Only</h2>
            </div>
            <div
              className="welcomeImg"
              style={{
                justifyContent: "center",
                marginTop: "18%",
                alignItems: "center",
              }}
            >
              <img
                src={welcomeimg}
                id="wel-img-id"
                alt=""
                style={{ borderRadius: 35 }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* <a href="/dashboard">Dashboard</a> */}
    </>
  );
}

export default AdminLogin;
