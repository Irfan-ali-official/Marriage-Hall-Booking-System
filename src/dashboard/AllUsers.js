import React from 'react'
import Table from 'react-bootstrap/Table';
import Menu from './Menu';
import Button from 'react-bootstrap/Button';
import Header from './Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen , faTrash } from '@fortawesome/free-solid-svg-icons'
import Colors from '../components/Colors';


function AllUsers() {
  return (
    <>
    <Header/>
    {/* <Header/> */}
    <div >
  

         {/*New Registrations code  */}
         <div className="content-wrapper">
            <section className="col-lg-12 ">
            <div className="card"  style={{width:'100%'}}>
              <div className="card-header">
                <h1 className="card-title">
                  <i className="ion ion-clipboard mr-1"  style={{fontSize:30}} />
                  <span style={{color:Colors.primary, fontWeight:'bold',fontSize:25}}>Registered Users</span>
                </h1>
              </div>
              {/* /.card-header */}
              <div>
      <ul >
      <Table striped bordered hover variant="light">
        <thead style={{fontSize:15,fontWeight:'bold',color:Colors.primary}}>
        <tr   >
          <th>#</th>
          <th style={{width:'14%',}}> Name </th>
          <th style={{width:'16%'}}> Email </th>
          <th >City</th>
          <th style={{width:'15%'}}>Phone Number</th>
          
          <th style={{width:'11%'}}>Date</th>
          <th style={{width:'12%'}}>Total Orders</th>
          <th style={{width:'15%'}}>Action</th>
         
         
        </tr>
      </thead>
      <tbody style={{fontSize:13,fontWeight:'bold'}}>
        <tr >
          <td>1</td>
          <td>Ilyana</td>
          <td>ilyana@gmail.com</td>
          <td>Islamabad</td>
          <td>0300-2932932</td>
          <td>16-8-2022</td>
          <td>500</td>
          <td>
          <Button variant="danger" style={{marginLeft:'30%'}} >
           <FontAwesomeIcon icon={ faTrash } className="nav-icon"/>
           </Button>
          </td>
        
         
       
        </tr>
        <tr>
          <td>2</td>
          <td>Maham</td>
          <td>maham@gmail.com</td>
          <td>Karachi</td>
          <td>0300-2932932</td>
          <td>16-8-2022</td>
          <td>400</td>
          <td>
          
          <Button variant="danger" style={{marginLeft:'30%'}} >
           <FontAwesomeIcon icon={ faTrash } className="nav-icon"/>
           </Button>
          </td>
        </tr>
        <tr>
          <td>3</td>
          <td>Hana</td>
          <td>hana@gmail.com</td>
          <td>Sukkur</td>
          <td>0300-2932932</td>
          <td>16-8-2022</td>
          <td>300</td>
          <td>
          
          <Button variant="danger" style={{marginLeft:'30%'}} >
           <FontAwesomeIcon icon={ faTrash } className="nav-icon"/>
           </Button>
          </td>
        </tr>
        <tr>
          <td>4</td>
          <td>sara</td>
          <td>sara@gmail.com</td>
          <td>Islamabad</td>
          <td>0300-1292929</td>
          <td>15-8-2022</td>
          <td>200</td>
          <td>
           <Button variant="danger" style={{marginLeft:'30%'}} >
           <FontAwesomeIcon icon={ faTrash } className="nav-icon"/>
           </Button>
          </td>
          
        </tr>
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

export default AllUsers
