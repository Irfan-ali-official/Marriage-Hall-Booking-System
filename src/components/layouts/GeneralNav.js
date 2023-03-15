import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Colors from "../Colors";

function GeneralNav() {
  return (
    <>
      <Navbar sticky="top" className="header">
        <a href="/register" className="logo">
          <img alt="" src="/images/MainLogo.png" width="80" height="70" />
          <span>Marriage </span>Hall Booking System
        </a>
      </Navbar>
    </>
  );
}

export default GeneralNav;
