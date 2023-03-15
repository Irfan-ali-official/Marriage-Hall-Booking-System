import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Colors from '../Colors';
import GeneralNav from './GeneralNav';




function Companies() {

  const  title=["Floral Venues", "Spicy Foods", "Pearl & Mist Decorators", "Soo Events","Floral Venues", "Spicy Foods", "Pearl & Mist Decorators", "Soo Events"];
  return (
    <>
<GeneralNav/>
  
    <section  style={{backgroundImage:"url(/images/bg2.jpg)",  width: "100%",  height: "430px",  } }>
    <Container> 
    
    <Row> 
    <Col></Col>
    <Col xs={6} style={{marginTop:'11%'}}>  <p style={{ color:Colors.primary, fontSize:28,fontStyle:'oblique',}}>Higher Karachi's best companies and vendors for your event.</p></Col>
    <Col></Col>
    </Row>

    
    <Row> 
    <Col></Col>
    <Col  xs={6} style={{ borderColor :Colors.primary,  padding:7, borderWidth:2, elevation:25,borderRadius:15,  backgroundColor:'white'}}> 
        <input type="search"  name="CompanySearch" placeholder='Search a Company or Vendor ' 
         style={{ color:Colors.primary, borderColor:Colors.primary, fontSize:25,fontStyle:'oblique', width:'80%'}}/>
        <Button style={{marginBottom:'4%', height: '85%', fontSize:15, marginLeft:'1%', color:Colors.white, backgroundColor:Colors.primary}}>Search</Button>
    </Col>
    <Col></Col>
   </Row>
 </Container>

</section>

<Container style={{marginBottom:"2%"}}>
<p style={{ marginLeft:'1%',marginTop:'4%', fontStyle:'oblique', fontSize:25,color:Colors.primary }}>Available Companies and Vendors</p>
<Row  xs={2} md={4} className="g-4" >
    
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card style={{borderRadius:5,  borderWidth:2, width:'95%'}}>
        <Card.Img
        style={{borderRadius:5, borderColor:Colors.primary, borderWidth:3}}
         variant="top" src="/images/Islamabad.jpg"   />
        
      <Card.Body>
      <Card.Title style={{color:Colors.primary, fontSize:15 }}>{title[idx]} </Card.Title>
     </Card.Body>
    </Card>
   </Col>
    ))}
  </Row>
 
</Container>

   


   {/* Temporary */}

   <Container>

<Row  xs={2} md={4} className="g-4" >
    
    {Array.from({ length: 4 }).map((_, idx) => (
      <Col>
        <Card style={{borderRadius:5,  borderWidth:2, width:'95%'}}
       >
    
      
        <Card.Img
        style={{borderRadius:5, borderColor:Colors.primary, borderWidth:3}}
         variant="top" src="/images/Islamabad.jpg"   />
        
      <Card.Body>
      <Card.Title style={{color:Colors.primary, fontSize:15 }}>{title[idx]} </Card.Title>
     </Card.Body>
    </Card>
   </Col>
    ))}
  </Row>
 
</Container>

   
    </>
  )
}

export default Companies
