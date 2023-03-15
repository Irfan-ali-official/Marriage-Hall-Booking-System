import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Colors from "../Colors";
import Dropdown from "react-bootstrap/Dropdown";

function Header1() {
  return (
    <>
      <div className="header" style={{ padding: 0.3 }}>
        <a href="#/" className="logo">
          <img alt="" src="/images/MainLogo.png" />
          <span>Marriage</span>Hall Booking System
        </a>

        <div className="navbar" style={{ marginRight: "0.8%" }}>
          <a href="#home">home</a>
          <a href="#service">services</a>
          <a href="#about">about</a>
          <a href="#mobileApp">Mobile App</a>
          <a href="#contact">contact</a>
          <a href="/register">Register</a>
          <a href="/login">Admin Login</a>
        </div>

        {/* <div id="menu-bars" className="fas fa-bars"></div> */}
        {/* <ul>
     <li className="nav-item dropdown">
       <a className="nav-link" data-toggle="dropdown" href="#/"  data-widget="control-sidebar" data-slide="true">
         <i className="fas fa-th-large" style={{ fontSize:50 }}/>
        
       </a>
       <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
       
           <Dropdown.Item eventKey="1" href="/adminProfile" style={{fontSize:15}}>Profile</Dropdown.Item>
           <Dropdown.Item eventKey="2" href="/dashboard" style={{fontSize:15}}>Dashboard</Dropdown.Item>
           <Dropdown.Divider />
           <Dropdown.Item eventKey="4"style={{fontSize:15}}>Log Out</Dropdown.Item>
         
       </div>
     </li>
   </ul> */}
      </div>
    </>
  );
}

export default Header1;
