import React from "react";
import AboutImage from "../../assets/images/about-img.jpg";
import Colors from "../Colors";

export default function About() {
  return (
    <>
      <section className="about" id="about">
        <h1 className="heading">
          <span>about</span> us{" "}
        </h1>
        <div className="row">
          <div className="image">
            <img src={AboutImage} alt="" />
          </div>
          <div className="content">
            <h3 style={{ color: "#349EFF" }}>
              we will give a very special celebration for you
            </h3>
            <p style={{ color: Colors.primary, fontSize: 16.5 }}>
              At Marriage Hall Booking System Planners, we thrive on making your
              event come to life with event management services of our partner
              companies and vendors, who strives to make your event a memorable
              experience for everyone.
            </p>
            <p style={{ color: Colors.primary, fontSize: 16.5 }}>
              Our ultimate goal is to create something that attendees will
              remember…and talk about! How do we achieve this? We believe that
              it all comes down to the meticulous planning which start when
              customer select an a company and fill their booking form via
              mobile app.Then Company Ask Customer To Pay Advance & Company
              Accepts The Order,And Starts Searching Vendors For Needed
              Services: Like Food, Venue And So On.Company And Vendor Both
              Together Execute The Event.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
