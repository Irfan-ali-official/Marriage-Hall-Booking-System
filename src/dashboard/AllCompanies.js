import React from "react";
import Table from "react-bootstrap/Table";
import Menu from "./Menu";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Colors from "../components/Colors";

function AllCompanies() {
  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/editCVDetails");
  };

  return (
    <>
      <Header />
      {/* <Header/> */}
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
                    {" "}
                    Registered Marriage Halls
                  </span>
                </h1>
              </div>
              {/* /.card-header */}
              <div>
                <ul>
                  <Table striped bordered hover variant="light">
                    <thead
                      style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        color: Colors.primary,
                      }}
                    >
                      <tr>
                        <th>#</th>
                        <th style={{ width: "14%" }}>Marriage Hall Name </th>
                        <th style={{ width: "16%" }}>Business Type</th>
                        <th>City</th>
                        <th style={{ width: "12%" }}>Price Range</th>
                        <th style={{ width: "18%" }}>Services</th>
                        <th style={{ width: "11%" }}>Date</th>
                        <th style={{ width: "12%" }}>Total Orders</th>
                        <th style={{ width: "15%" }}>Action</th>
                      </tr>
                    </thead>
                    <tbody style={{ fontSize: 13, fontWeight: "bold" }}>
                      <tr>
                        <td>1</td>
                        <td>Floral Weddings</td>
                        <td>BirthDay</td>
                        <td>Sukkur</td>
                        <td>Above 1500000</td>
                        <td>Venue Decoration Photography Catering</td>
                        <td>16-8-2022</td>
                        <td>500</td>
                        <td>
                          <div>
                            <Button variant="success" onClick={HandleClick}>
                              <FontAwesomeIcon
                                icon={faPen}
                                className="nav-icon"
                              />
                            </Button>
                            <Button
                              variant="danger"
                              style={{ marginLeft: "1%" }}
                            >
                              <FontAwesomeIcon
                                icon={faTrash}
                                className="nav-icon"
                              />
                            </Button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Fragrance Marriag Hall</td>
                        <td>Weddings</td>
                        <td>Larkana</td>
                        <td>Above 100000</td>
                        <td>Catering Venue</td>
                        <td>16-8-2022</td>
                        <td>400</td>
                        <td>
                          <Button variant="success" onClick={HandleClick}>
                            <FontAwesomeIcon
                              icon={faPen}
                              className="nav-icon"
                            />
                          </Button>
                          <Button variant="danger" style={{ marginLeft: "1%" }}>
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="nav-icon"
                            />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Royal Weddings</td>
                        <td>Company</td>
                        <td>Sukkur</td>
                        <td>Above 150000</td>
                        <td>Venue Decoration Photography</td>
                        <td>16-8-2022</td>
                        <td>300</td>
                        <td>
                          <Button variant="success" onClick={HandleClick}>
                            <FontAwesomeIcon
                              icon={faPen}
                              className="nav-icon"
                            />
                          </Button>
                          <Button variant="danger" style={{ marginLeft: "1%" }}>
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="nav-icon"
                            />
                          </Button>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Love Marriage Garden</td>
                        <td>Vendor</td>
                        <td>Larkana</td>
                        <td>Above 600000</td>
                        <td>Venue Catering</td>
                        <td>15-8-2022</td>
                        <td>200</td>
                        <td>
                          <Button variant="success" onClick={HandleClick}>
                            <FontAwesomeIcon
                              icon={faPen}
                              className="nav-icon"
                            />
                          </Button>
                          <Button variant="danger" style={{ marginLeft: "1%" }}>
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="nav-icon"
                            />
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Menu />
    </>
  );
}

export default AllCompanies;
