import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


export default class Header extends Component {
    render() {
        return (
           <div>
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars" /></a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="/dashboard" className="nav-link"><span style={{fontSize:15,fontWeight:'bold'}}>Home</span></a>
      </li>
    </ul>
    {/* SEARCH FORM
    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search" />
          </button>
        </div>
      </div>
    </form> */}
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
     
      {/* Dropdown Menu */}
      <li className="nav-item dropdown">
        <a className="nav-link" data-toggle="dropdown" href="#/"  data-widget="control-sidebar" data-slide="true">
          <i className="fas fa-th-large" />
         
        </a>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        
            <Dropdown.Item eventKey="1" href="/adminProfile" style={{fontSize:15}}>Profile</Dropdown.Item>
            <Dropdown.Item eventKey="2" href="/dashboard" style={{fontSize:15}}>Dashboard</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="4" href="/" onClick={()=>{
              localStorage.setItem('token',' ')
              console.log(localStorage.getItem('token'))
              
            }} style={{fontSize:15}}>Log Out</Dropdown.Item>
          
        </div>
      </li>
    </ul>
  </nav>
</div>

        )
    }
}
