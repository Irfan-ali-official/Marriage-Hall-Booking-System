import React from 'react';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Colors from '../Colors';
import '../../Login.css'

function MobileApp() {
  return (
    <>
  
  
  <section className="service" id="mobileApp">

    <h1 className="heading"> Put us in your <span>Pocket</span> </h1>

<div className="box-container">

    <div className="box">
     
        <h3>Download the app to make your events memorable.</h3>
        <p>It's all at your fingertips – the companies and vendor you want to higher for your event.<br/> Find the right company and vendor to execute your event, and make it unforgetable. Go ahead, download us.</p>
    <Container>
    <Row style={{marginTop:'5%'}}>
      <Col> 
      <Link to="/companies"> <img src="/images/appgalleryicon.png" alt="AppGllery Link"  width="150" height="50" style={{borderRadius:15}}></img></Link>
      <Link to="/companies"> <img src="/images/googleplay.png" alt="AppGllery Link"  width="150" height="50" style={{borderRadius:15, marginLeft:3,}}></img>
       </Link></Col>
     
      </Row>
    </Container>
    </div>
  

</div>

</section>
  </>
  )
}

export default MobileApp
