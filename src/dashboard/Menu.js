import React, { Component } from "react";
import Colors from "../components/Colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faBuildingColumns,
  faHome,
  faUser,
  faBuilding,
  faIdCard,
  faGear,
  faContactBook,
  faHandHoldingDollar,
} from "@fortawesome/free-solid-svg-icons";
export default class Menu extends Component {
  render() {
    return (
      <div>
        <aside
          className="main-sidebar sidebar-dark-primary elevation-4"
          style={{ color: "#d176d0" }}
        >
          {/* Brand Logo */}
          <a href="index3.html" className="brand-link">
            <img
              src="/images/MainLogo.png"
              alt="Logo"
              className="brand-image img-circle elevation-3"
              style={{ opacity: ".8", fontSize: 27 }}
            />
            <span className="brand-text font-weight-light">
              Admin Dashboard
            </span>
          </a>
          {/* Sidebar */}
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="info">
                <a
                  href="#/"
                  className="d-block"
                  style={{ fontSize: 27, fontWeight: "bold" }}
                >
                  Loang Khan{" "}
                </a>
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
                <li className="nav-item has-treeview menu-open">
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <a href="/dashboard" className="nav-link">
                        <FontAwesomeIcon icon={faHome} className="nav-icon" />
                        <p style={{ fontSize: 14, fontWeight: "bold" }}>
                          Dashboard{" "}
                        </p>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a href="/new" className="nav-link">
                        <FontAwesomeIcon
                          icon={faCartPlus}
                          className="nav-icon"
                        />
                        <p style={{ fontSize: 14, fontWeight: "bold" }}>
                          New Registrations
                        </p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a href="/allCompanies" className="nav-link">
                    <FontAwesomeIcon
                      icon={faBuildingColumns}
                      className="nav-icon"
                    />
                    <p style={{ fontSize: 14, fontWeight: "bold" }}>
                      Marraige Halls
                    </p>
                  </a>
                </li>

                <li className="nav-item">
                  <a href="/allVendors" className="nav-link">
                    <FontAwesomeIcon icon={faBuilding} className="nav-icon" />
                    <p style={{ fontSize: 14, fontWeight: "bold" }}>Owners</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/allUsers" className="nav-link">
                    <FontAwesomeIcon icon={faUser} className="nav-icon" />
                    <p style={{ fontSize: 14, fontWeight: "bold" }}>Users</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="dashboard/new" className="nav-link">
                    <FontAwesomeIcon
                      icon={faHandHoldingDollar}
                      className="nav-icon"
                    />
                    <p style={{ fontSize: 14, fontWeight: "bold" }}>Profit</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/adminProfile" className="nav-link">
                    <FontAwesomeIcon icon={faIdCard} className="nav-icon" />
                    <p style={{ fontSize: 14, fontWeight: "bold" }}>Profile</p>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="contactDevelopers" className="nav-link">
                    <FontAwesomeIcon
                      icon={faContactBook}
                      className="nav-icon"
                    />
                    <p style={{ fontSize: 14, fontWeight: "bold" }}>
                      Contact Developers
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
            {/* /.sidebar-menu */}
          </div>
          {/* /.sidebar */}
        </aside>
      </div>
    );
  }
}
