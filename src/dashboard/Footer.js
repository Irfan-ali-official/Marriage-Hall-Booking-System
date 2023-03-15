import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="main-footer">
          <strong>
            Copyright © 2023-2024 <a>Marriage Hall Booking System</a>.
          </strong>
          <strong>All rights reserved.</strong>
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 1.0.0
          </div>
        </footer>
      </div>
    );
  }
}
