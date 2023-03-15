import React from 'react'
import { Link} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Colors from '../Colors';


function Cities() {

   const  title=["Sukkur", "Karachi", "Lahore", "Islamabad", "Hyderabad", "Peshawar"];
 
  return (
 <>
 

<section className="gallery" id="gallery">

    <h1 className="heading">Cities in which we <span>Operate</span></h1>

    <div className="box-container">

        <div className="box">
            <img src="/images/sukkur.jpg" alt=""/>
            <h3 className="title">{title[0]}</h3>
            <div className="icons">
                <a href="/companies" className="fas fa-share"></a>
              
            </div>
        </div>

        <div className="box">
            <img src="/images/karachi.jpg" alt=""/>
            <h3 className="title">{title[1]}</h3>
            <div className="icons">
              
                <a href="/companies" className="fas fa-share"></a>
            
            </div>
        </div>

        <div className="box">
            <img src="/images/lahore.jpg" alt=""/>
            <h3 className="title">{title[2]}</h3>
            <div className="icons">
             
                <a href="/companies" className="fas fa-share"></a>
               
            </div>
        </div>

        <div className="box">
            <img src="/images/Islamabad.jpg" alt=""/>
            <h3 className="title">{title[3]}</h3>
            <div className="icons">
                <a href="/companies" className="fas fa-share"></a>
                
            </div>
        </div>

        <div className="box">
            <img src="/images/hyderabad.jpg" alt=""/>
            <h3 className="title">{title[4]}</h3>
            <div className="icons">
            <a href="/companies" className="fas fa-share"></a>
            
            </div>
        </div>

        <div className="box">
            <img src="/images/peshawar.jpg" alt=""/>
            <h3 className="title">Peshawar</h3>
            <div className="icons"> <a href="#" className="fas fa-share"></a>
          
            </div>
        </div>

     
       
    </div>

</section>

</>

  )
}

export default Cities
