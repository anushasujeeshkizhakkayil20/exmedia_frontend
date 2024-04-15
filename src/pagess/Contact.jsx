import React, { useEffect, useState } from 'react'
import {Row ,Col} from 'react-bootstrap'
import adver from '../Assets/adver.png'
import Form from 'react-bootstrap/Form';
import { contactAPI, getmediaAPI ,} from '../services/allAPI';
import { useNavigate } from 'react-router-dom';



function Contact() {
  //state
  const[contactdetails,setContactDetails]=useState({
    name:"",
    sname:"",
    email:"",
    message:""
  })
  //navigate
  const navigate = useNavigate()
  //display state
  //console.log(contactdetails);

     //add contact

  const handleAdd = async(e)=>{
    e.preventDefault()
    const {name,sname,email,message} = contactdetails
    if(!name || !sname || !email || !message){
      alert('please fill the form completely')
    }
    else{
    const result = await contactAPI(contactdetails)
    console.log(result);
    if(result.status===200){
      alert(`${result.data.name}submited successfully`)
      setContactDetails({
        username:"", sname:"" ,email:"", message:""
      })
      navigate('/home')
      }
    else{
      alert(`${result.response.data}`)
    }
    
    }


  }

 
    return (
   <>
   <div>
   <Row>
    <Col sm={12} md={6}>
    <img src={adver} alt="" style={{width:'700px', height:'400px'}} />
    </Col>
    <Col sm={12} md={6}>
     <h1 style={{color:'red'}}> THE BEST AGENCY FOR YOUR BUSINES</h1>
     <h6>YOUR ULTIMATE ADVERTISEMENT COMPANY WHERE INNOVATIONS MEETS CREATIVITY</h6>
    </Col>
   </Row>
   </div>
   <div>
    <Row>
        <Col>
        <h1 className='text-center mt-5' style={{color:'red'}}>CONTACT US</h1>
        <h6 className='text-center mt-5 d-flex-column'>We're here to help!Reach out to us with any questionsand we'll get back to you promptly.</h6>
        </Col>
    </Row>
   </div>
        <div>
            <Row className='mt-4 p-5 mb-5'>
            <Col md={4}>
            <h5>EMAIL US</h5>
            <h4>SHOOT</h4>
            </Col>
            <Col md={4}>
            <h5>OUR PRESENCE</h5>
            <h4>KERALA,UAE</h4>
            <h6>Call Us</h6>
            </Col>
            <Col md={4}>
            <h5>TO START</h5>
            <h4>A CONVERSATION</h4>
            <h6>+919526123466</h6>
            </Col>
            </Row>
            
        </div>
        <div style={{backgroundColor:'black'}}>
            <Row>
                <Col>
                <h4 className='text-center' style={{color:'red'}}>LETS GET IN TOUCH!</h4>
                <div className='row align-items-center'>
          
           <div className='col-lg-6'>
            <div className='d-flex align-items-center justify-content-center flex-column  mt-5 ' >
                
              <Form>
    
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter First Name"  className='w-100' value={contactdetails.name} onChange={(e)=>setContactDetails({...contactdetails,name:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Second Name" value={contactdetails.sname} onChange={(e)=>setContactDetails({...contactdetails,sname:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control className='text-black' type='email'  placeholder="Enter Email address" value={contactdetails.email} onChange={(e)=>setContactDetails({...contactdetails,email:e.target.value})} />
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       <textarea name="" id="" cols="49" rows="4" placeholder='Message Content' value={contactdetails.message} onChange={(e)=>setContactDetails({...contactdetails,message:e.target.value})}></textarea>        
      </Form.Group>
      <button onClick={handleAdd} className='btn btn-success'>submit</button>
      </Form>
            </div>
           </div>
           <div className='col-lg-6'>
           <img src="https://t4.ftcdn.net/jpg/03/37/96/33/360_F_337963325_EJuPjWslX3vAFxJ59L3y1cm6IsSfo07s.jpg"className='mt-4 mb-5'/>
          </div>
        </div>
                </Col>

            </Row>
        </div>



   </>
  )
}

export default Contact