import "../../assets/css/style.css";
import React, { Fragment } from "react";
import Colors from "../Colors";

const Footer = () => {
  return (
    <Fragment>
      <div>
        <section className="footer">
          <div className="box-container">
            <div className="box">
              <h3>quick links</h3>
              <a href="/#home">
                {" "}
                <i className="fas fa-arrow-right"></i> home{" "}
              </a>
              <a href="/#service">
                {" "}
                <i className="fas fa-arrow-right"></i> service{" "}
              </a>
              <a href="/#about">
                {" "}
                <i className="fas fa-arrow-right"></i> about{" "}
              </a>
              <a href="/#mobileApp">
                {" "}
                <i className="fas fa-arrow-right"></i> mobile app{" "}
              </a>
              <a href="/#contact">
                {" "}
                <i className="fas fa-arrow-right"></i> contact{" "}
              </a>
            </div>

            <div className="box">
              <h3>contact info</h3>
              <a href="#">
                {" "}
                <i className="fas fa-phone"></i> +123-456-7890{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-phone"></i> +111-222-3333{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-envelope"></i> MarriageHallss@gmail.com{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fas fa-map-marker-alt"></i> Sukkur, Sindh -
                Pakistan{" "}
              </a>
            </div>

            <div className="box">
              <h3>follow us</h3>
              <a href="#">
                {" "}
                <i className="fab fa-facebook-f"></i> facebook{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab fa-twitter"></i> twitter{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab fa-instagram"></i> instagram{" "}
              </a>
              <a href="#">
                {" "}
                <i className="fab fa-linkedin"></i> linkedin{" "}
              </a>
            </div>
          </div>

          <div className="credit">
            {" "}
            created by <span>Loang Irfan</span> | all rights reserved{" "}
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default Footer;
