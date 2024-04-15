import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getmediaAPI } from '../services/allAPI';
function Exmedia() {
  const [exmediahome,setExmediaHome] = useState([])


   //get

   const getmedias = async()=>{
    const result =await getmediaAPI()
    console.log(result.data);
    setExmediaHome(result.data)
  }
  useEffect(()=>{
       getmedias()
  },[])
  return (
   <>
   <Table striped bordered hover>
      <thead>
        <tr>
          
          <th>First Name</th>
          <th>S Name</th>
          <th>Email</th>
          <th>MessageContent</th>
        </tr>
      </thead>
     <tbody>
     {exmediahome?.length>0?
     exmediahome?.map((item)=>(<tr>
      <td>{item.name}</td>
      <td>{item.sname}</td>
      <td>{item.email}</td>

      <td>{item.message}</td>
    </tr>
    
      
    )):
        
     <p>nothing to display</p>}
      </tbody>
    </Table>
   </>
  )
}

export default Exmedia