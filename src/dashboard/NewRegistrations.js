import React, {useState,useEffect} from 'react'
import Table from 'react-bootstrap/Table';
import Menu from './Menu';
import Header from './Header';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Colors from '../components/Colors';



function NewRegistrations() {
  
  const navigate = useNavigate();
  const [regs, setRegs] = useState([]);
  const [bool, setBool] = useState(false);

  const token = localStorage.getItem('token')

  useEffect(()=>{

    getNewRegs();
      
   },[]);

   const getNewRegs =()=>{
    console.log('new regs',token)

      fetch(`https://bluejay-mobile-app.herokuapp.com/admin/getNewRegs`,{
                    method: "get",
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        token
                    }
                  
              }).then(res=>res.json()).then(result=>{
                // console.log(result)

                if( result.status == 'ok'){
                  setRegs(result.data)
                  console.log(regs)
                       
                }
              }).catch(err=>console.log('catch',err.message))
   }

   const approveCompany = (c_id)=>{

    console.log('accept',token)
    const value={c_id:c_id}

    fetch(`https://bluejay-mobile-app.herokuapp.com/admin/acceptCompany`,{
                  method: "post",
                  body: JSON.stringify(value),
                  headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                      token
                  }
                
            }).then(res=>res.json()).then(result=>{
              console.log(result)

              if( result.status == 'ok'){
                getNewRegs()
                     
              }
            }).catch(err=>console.log('catch',err.message))
    

   }

   const rejectCompany = (c_id)=>{
    console.log('reject',token)
    
    const value={c_id:c_id}

    fetch(`https://bluejay-mobile-app.herokuapp.com/admin/rejectCompany`,{
                  method: "post",
                  body: JSON.stringify(value),
                  headers: {
                      Accept: "application/json, text/plain, */*",
                      "Content-Type": "application/json",
                      token
                  }
                
            }).then(res=>res.json()).then(result=>{
              console.log(result)

              if( result.status == 'ok'){
                getNewRegs()
              }
            }).catch(err=>console.log('catch',err.message))
    

  }





  return (
    <>
    <Header/>
   
    <div >
     {/*New Registrations code  */}
         <div className="content-wrapper">
            <section className="col-lg-12 connectedSortable">
            <div className="card"  style={{width:'100%'}}>
              <div className="card-header">
                <h1 className="card-title">
                  <i className="ion ion-clipboard mr-1" style={{fontSize:30}} />
                  <span style={{color:Colors.primary, fontWeight:'bold',fontSize:25}}>New Registrations</span>
                </h1>
              </div>
              {/* /.card-header */}
              <div>
      <ul >
      <Table striped bordered hover variant="light">
        <thead style={{fontSize:15,fontWeight:'bold',color:Colors.primary}}>

        <tr   >
          {/* <th>#</th> */}
          <th style={{width:'17%'}}>Business Name </th>
          <th style={{width:'20%'}}>Business Type</th>
          <th >City</th>
          <th style={{width:'17%'}}>Price Range</th>
          <th style={{width:'24%'}}>Services</th>
          <th style={{width:'17%'}}>Available Hours</th>
          <th >Action</th>
          <th></th>
         
        </tr>
      </thead>

      <tbody style={{fontSize:13,fontWeight:'bold'}}>


  {regs.map((reg,i)=>{

        return <tr key={reg._id}>
          <td>{reg.company_name}</td>
          <td>Company</td>
          <td>{reg.city}</td>
          <td>{reg.price_range}</td>
          <td>{reg.services}</td>
          <td>{reg.available_hours}</td>
          <td>
          <Button style={{width:80,margin:2}} variant="success" onClick={()=>{approveCompany(reg._id)}}>Accept</Button>
          <Button style={{width:80,margin:2}} variant="danger" onClick={()=>{rejectCompany(reg._id)}}>Reject</Button>
          </td>
        </tr>

  })}


      </tbody>
    </Table>
 </ul>
 </div>
 </div>
</section>
</div>
</div>
<Menu/>
    </>
    )
}

export default NewRegistrations
