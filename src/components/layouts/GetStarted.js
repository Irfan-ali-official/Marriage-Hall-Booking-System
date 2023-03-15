import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Colors from '../Colors';

function GetStarted() {
  return (
    <Card className="text-center " style={{marginTop:40, marginLeft:'15%', marginRight:'15%', fontSize:25, fontWeight:'bold'}}>
      <Card.Header style={{backgroundColor:Colors.mainColor, color:Colors.white, fontStyle:'oblique', fontSize:25}}>
      <div className="content">
        <h3>Its time to become partners! with the best <span> event organizer's application </span></h3>
        
    </div>
      </Card.Header>
      <Card.Body >

        <Card.Text style={{fontSize:20}}> <span>
        Would you like millions of new customers who higher you to provide services for their events? So would we!<br/>
       It's simple: we list your company details with services you provide online in our mobile application, help you get orders, higher vendors , and successfully plan and execute the various events! </span>
       <br/><br/> Interested? Let's start our partnership today!
        </Card.Text>
      </Card.Body>
      
      
      {/* <Card.Footer className="text-muted" style={{backgroundColor:Colors.white}}> */}
        <div style={{ justifyContent:'center', alignItems:'center' }}>
        <Button 
         href='/register'
         style={{borderColor:Colors.white,fontSize:25, borderRadius:25, backgroundColor:Colors.mainColor, borderWidth:4, width:'20%' ,}}>
         Get Started</Button>
         </div>
      {/* </Card.Footer> */}
    </Card>
  );
}

export default GetStarted;