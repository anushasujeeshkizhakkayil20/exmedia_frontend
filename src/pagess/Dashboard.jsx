import React, { useEffect, useState } from 'react'
import Exmedia from '../component/Exmedia'
import Headers from '../component/Headers'
function Dashboard() {
  const [username,setUsername] =useState("")

  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem("existUser")).username)
  })
  return (
    <>
  
    <h2 className='mt-3 ms-3'>welcome <span className='text-success'>{username}</span></h2>
    <div>
    <Exmedia/>
    </div>
    
    
    </>
  )
}

export default Dashboard