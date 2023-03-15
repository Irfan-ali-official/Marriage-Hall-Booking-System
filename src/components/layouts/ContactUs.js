import Colors from '../Colors'
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from 'react-bootstrap/Alert';

export default function ContactUs() {


    const[mssgState, setMessageState]=useState(false)
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_d8jggl5', 'template_ric7o9s', form.current, '-Piq8r-Roi5__Ycx_')
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
    <section className="contact" id="contact">

<h1 className="heading"> <span>contact</span> us </h1>
<form ref={form} onSubmit={sendEmail}>
    <div className="inputBox">
        <input type="text" name="name" placeholder="name"/>
        <input type="email" name="email" placeholder="email"/>
    </div>
    <div className="inputBox">
        <input type="number" name="number" placeholder="number"/>
        <input type="text" name="subject" placeholder="subject"/>
    </div>
    <textarea name="message" placeholder="your message" id="" cols="30" rows="10"></textarea>
    <input  style={{borderColor:Colors.white,fontSize:17,color:"#fff", borderRadius:25, backgroundColor:Colors.mainColor, borderWidth:4, width:'25%' ,}}
     type="submit" value="send message" className="btn"/>
       {mssgState &&  <Alert style={{marginLeft:'1%', marginTop:'1%',color:Colors.white, backgroundColor:Colors.mainColor}} key="success" >
          Message Sent Successfully!
        </Alert>}
</form>
</section>
      
    </>
  )
}
