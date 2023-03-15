import Menu from './Menu';
import Header from './Header';
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Alert from 'react-bootstrap/Alert';
import Colors from '../components/Colors';

// npm i @emailjs/browser

const ContactDevelopers = ({alert}) => {

  const[mssgState, setMessageState]=useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7u0968e', 'template_ltr9ynj', form.current, '-Piq8r-Roi5__Ycx_')
      .then((result) => {
          console.log(result.text);
          setMessageState(true)
    
      }, (error) => {
          console.log(error.text);
      });
      console.log(form.current)
    }
  return (
    <>
    <Header/>
    <div className="content-wrapper" style={{ display:'flex',  justifyContent:'center', alignItems:'center', }}>
            <section className="col-lg-6 connectedSortable">
            <div className="card"  style={{width:'100%',  marginTop:'1%' }}>
            <h3 style={{display:'flex', justifyContent:"center", color:Colors.primary}}>Contact Form</h3>
    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
       <input type="submit" value="Send" />
        {mssgState &&  <Alert style={{marginLeft:'25%', marginTop:'5%'}} key="success" variant="success">
          Message Sent Successfully!
        </Alert>}
      </form>
    </StyledContactForm>
    </div>
    </section></div>
    <Menu/>
    </>
  );
};

export default ContactDevelopers;




// Styles
const StyledContactForm = styled.div`
  width: 500px;


  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 95%;
      height: 35px;
      padding: 5px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgb(153, 0, 153);
      }
    }

    textarea {
      max-width: 95%;
      min-width: 95%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgb(153, 0, 190);
      }
    }

    label {
      margin-top: 1rem;
      color:rgb(153, 0, 153);
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(153, 0, 153);
      color: white;
      border: none;
    }
  }
`;
