import React from 'react'
import Header1 from '../components/layouts/Header1';
import MyCarousel from '../components/layouts/MyCarousel';
import GetStarted from '../components/layouts/GetStarted';
import Cities from '../components/layouts/Cities';
import MobileApp from './layouts/MobileApp';
import Footer from './layouts/Footer';
import Service from './layouts/Service';
import About from './layouts/About';
import ContactUs from './layouts/ContactUs';




function home() {
  return (
    <div style={{backgroundColor:"#ecd1c4"}}>
    <Header1/>
    <MyCarousel/>
    <GetStarted/>
    <Service/>
    <About/>
    <MobileApp/>   
     <Cities/>
     <ContactUs/>
    <Footer/>
    
      
    </div>
  )
}

export default home
