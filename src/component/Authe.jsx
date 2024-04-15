import React, { useState } from 'react'
import { Link ,json,useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import { loginAPI, registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

function Authe({register}) {
  const [userData ,setUserData]= useState({
     username:"",
     email:"",
     password:""
  })

  //navigate
  const navigate = useNavigate()
  console.log(userData);

  const RegisterForm = register ? true:false

  //fun to register
  const handleRegister = async(e)=>{
    e.preventDefault()
    const {username,email,password} = userData
    if(!username || !email || !password){
      toast.info('please fill the form completely')
    }
    else{
    const result = await registerAPI(userData)
    console.log(result);
    if(result.status===200){
      toast.success(`${result.data.username}registerd successfully`)
      setUserData({
        username:"",  email:"", password:""
      })
      navigate('/login')
      }
    else{
      toast.error(`${result.response.data}`)
    }
    
    }
  }
  //fun login
  const handleLogin =async(e)=>{
    e.preventDefault()
    const {email,password} =userData
    if(!email || !password){
      toast.info(`please fill the form completely`)
    }
    else{
       const result = await loginAPI(userData)
       console.log(result);
       if(result.status === 200){
        //store data
        sessionStorage.setItem("existUser",JSON.stringify(result.data.existUser))
        sessionStorage.setItem("token",result.data.token)
        toast.success("login successfull")   
        setUserData({
          username:"",email:"",password:""
        })
        setTimeout(()=>{
          navigate('/')
        },2000)
       
       }
       else{
        toast.error(result.response.data)
       }
    }
  }
  return (
    <>

    <div style={{width:'100%',height:'100vh', }} className='d-flex justify-content-center align-item-center'>
     <div className='w-75 container'>
      <Link to={'/'} style={{textDecoration:'none',color:'red'}}  className='fs-5' ><i class="fa-solid fa-arrow-left fa-beat"></i>Back To Home</Link>
      <div className='card shadow bg-blue rounded p-5 mt-5'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
           <img src="https://images.squarespace-cdn.com/content/v1/610b093a220ab35056b49576/1647107995122-COXABYTIMXCPXU2MHT71/TAC%28t%29+EHTC+Digital+.png" alt="" className='w-100'/>
          </div>
           <div className='col-lg-6'>
            <div className='d-flex align-items-center justify-content-center flex-column  mt-5' >
             <h5 >
              {
              RegisterForm?"Sign up to your Account":"Sign in your Account"}
              </h5>      
              <Form>
     { RegisterForm &&
     <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter name"  value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
        
      </Form.Group>}
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email Id"  value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
        
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="password" placeholder="Enter password"  value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
        
      </Form.Group>
      {RegisterForm?
      <div>
        <button onClick={handleRegister}   className='btn btn-warning mt-4 p-2'>Register</button>
        <h6 className='text-white '>Already a user click here <Link to={'/login'}>Login</Link></h6>
      </div>:
      <div>
        <button onClick={handleLogin} className='btn btn-warning mt-4 p-2 '>Login</button>
        <h6 className='text-white'>New User ? click here to  <Link to={'/register'}>Register</Link></h6>
      </div>}
      </Form>
            </div>
           </div>
        </div>

      </div>
     </div>
    
    </div>
    <ToastContainer theme='colored' autoClose={2000} position='top-center'/>
    </>
  )
}

export default Authe