import React, { Component } from "react";
import styled from "styled-components";
import Table from "react-bootstrap/Table";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          {/* Content Header (Page header) */}
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">Dashboard</h1>
                </div>
                {/* /.col */}
              </div>
              {/* /.row */}
            </div>
            {/* /.container-fluid */}
          </div>
          {/* /.content-header */}
          {/* Main content */}
          <section className="content">
            <div className="container-fluid">
              {/* Small boxes (Stat box) */}
              <div className="row">
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-info">
                    <div className="inner">
                      <h3>4</h3>
                      <p>New Requests</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag" />
                    </div>
                    <a href="/new" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-success">
                    <div className="inner">
                      <h3>15</h3>
                      <p>Registered Marriage Halls</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-stats-bars" />
                    </div>
                    <a href="/allCompanies" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>

                {/* ./col */}
                <div className="col-lg-4 col-6">
                  {/* small box */}
                  <div className="small-box bg-warning">
                    <div className="inner">
                      <h3>17</h3>
                      <p>Registered Owners</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-pie-graph" />
                    </div>
                    <a href="/allVendors" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div>
                </div>
                {/* ./col */}
                {/* ./col */}
                <div className="col-lg-3 col-6">
                  {/* small box */}
                  {/* <div className="small-box bg-danger">
                    <div className="inner">
                      <h3>100</h3>
                      <p>User Registrations</p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add" />
                    </div>
                    <a href="/allUsers" className="small-box-footer">
                      More info <i className="fas fa-arrow-circle-right" />
                    </a>
                  </div> */}
                </div>
              </div>
              {/* /.row */}
              {/* Main row */}
              <div className="row">
                {/* Left col */}
                <section className="col-lg-7 connectedSortable">
                  {/* TO DO List */}
                  <div
                    className="card"
                    style={{ width: "100%", fontSize: 12, fontWeight: "bold" }}
                  >
                    <div className="card-header">
                      <h1
                        className="card-title"
                        style={{ fontSize: 15, fontWeight: "bold" }}
                      >
                        <i className="ion ion-clipboard mr-1" />
                        New Registrations
                      </h1>
                    </div>
                    {/* /.card-header */}
                    <div>
                      <ul>
                        <Table striped bordered hover variant="light">
                          <thead style={{ fontSize: 14 }}>
                            <tr>
                              <th>#</th>
                              <th>Marriage Hall</th>
                              <th>Business Type</th>
                              <th>Date</th>
                              <th>Status</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody style={{ fontSize: 14 }}>
                            <tr>
                              <td>1</td>
                              <td>Floral Weddings</td>
                              <td>Company</td>
                              <td>18-8-2022</td>
                              <td>Approved</td>
                              <td>
                                <a style={{ color: "blue" }} href="#/deatils">
                                  Details
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Spice Foods</td>
                              <td>Vendor</td>
                              <td>16-8-2022</td>
                              <td>Pending</td>
                              <td>
                                <a style={{ color: "blue" }} href="#/deatils">
                                  Details
                                </a>
                              </td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Royal Photographers</td>
                              <td>Vendor</td>
                              <td>16-8-2022</td>
                              <td>Rejected</td>
                              <td>
                                <a style={{ color: "blue" }} href="#/deatils">
                                  Details
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </ul>
                    </div>
                  </div>
                  {/* /.card */}
                </section>
                {/* /.Left col */}
                <section className="col-lg-5 ">
                  <div
                    className="card bg-gradient-primary"
                    style={{ width: "100%", fontSize: 16 }}
                  >
                    <div className="card-header">
                      <h3
                        className="card-title"
                        style={{ fontSize: 15, fontWeight: "bold" }}
                      >
                        <i className="ion ion-clipboard mr-1" />
                        Top Marriage Halls
                      </h3>
                    </div>
                    {/* /.card-header */}
                    <div>
                      <ul>
                        <Table striped bordered hover variant="gray">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Marriage Hall Names </th>
                              <th>Total Orders </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Floral Weddings</td>
                              <td>400</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Spice Foods</td>
                              <td>350</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Royal Photographers</td>
                              <td>200</td>
                            </tr>

                            <tr>
                              <td>4</td>
                              <td>Heaven Venue</td>
                              <td>180</td>
                            </tr>

                            <tr>
                              <td>5</td>
                              <td>Royal Weddings</td>
                              <td>150</td>
                            </tr>
                          </tbody>
                        </Table>
                      </ul>
                    </div>
                  </div>
                  {/* /.card */}
                </section>
              </div>{" "}
              {/* /.row (main row) */}
            </div>
            {/* /.container-fluid */}
          </section>
          {/* /.content */}
        </div>
      </div>
    );
  }
}
