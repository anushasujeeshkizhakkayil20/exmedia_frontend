import React, { useEffect, useState } from 'react'
import {Row,Col}from 'react-bootstrap'
import adv from '../Assets/adv.webp'
import adv2 from '../Assets/adv3.jpg'
import company from '../Assets/company-adv2.jpg'
import pic from '../Assets/pic1.jpg'
import { Link } from 'react-router-dom'
function Home() {
  const[islogin,setIsLogin]=useState(false)

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
     setIsLogin(true)
    }
  },[])
  return (
   <>
   <div style={{width:'100%',height:'100vh',backgroundColor:'black'}}>
     <div className='container-fluid rounded'>
      <Row className='align-items-center p-5'>
        <Col sm={12} md={6}>
        
      <h3 style={{fontSize:'80px',color:'red'}} >Exmedia</h3>
     <p> GRAPHICS TRANSFORMING BUSSINESS STRATEGY</p>
     {islogin?
      <Link to={'/dashboard'}><button className='btn btn-success'>Manage project<i class="fa-solid fa-arrow-right fa-beat ms-3"></i></button></Link>:
      <Link to={'/login'}><button className='btn btn-success'>Get Started<i class="fa-solid fa-arrow-right fa-beat ms-3"></i></button></Link>}
      </Col>
      <Col sm={12} md={6}>
        
         <img src={adv} alt="" className='w-75' style={{marginTop:'100px'}} />
        </Col>
      </Row>
     </div>
   </div>
   <div className='mt-5 all-media  mb-5'>
    <h3 className=' text-center '>WHO WE ARE EXMEDIA</h3>
    <Row>
      <Col>
      <p>Since 2006, Exmedia has been a trailblazing Advertisement agency, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency; we're your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior, and emerging trends, Exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation.</p>
      </Col>
      <Col>
      <p>Based on our strategy work, we create distinctive brand Your Ultimate Advertisement Company, where innovation meets creativity to redefine your brand's journey. Our agency stands as a pillar of excellence, providing a comprehensive suite of services including Studio, Graphics, and Branding. Step into our cutting-edge studio, a hub of ingenuity where ideas take shape. From brainstorming sessions to concept realization, our team collaborates to bring your vision to life. Our studio is the birthplace of dynamic campaigns that captivate and resonate..</p>
      </Col>
    </Row>
    <p className='mt-5 text-center' >EXMEDIA - STUDIO | GRAPHICS | BRANDING</p>
   </div>
   <div style={{backgroundColor:'white'}}>
    <Row>
      <Col className='align-items-center'>
       <h1 style={{color:'red'}} className='text-center'>WHAT WE DO</h1>
       <h6 style={{color:'black'}} className='text-center'>WE OFFER DIGITAL SOLUTIONS</h6>
      
      </Col>
      </Row>
      <div>
       <Row>
        <Col >
        <h6 style={{color:'black'}}>STUDIO</h6>
        <h4 style={{color:'black'}} className='justify-content flex-column'>ELEVATE YOUR IMPACTS & CONNECT BRANDS WITH CUSTOMERS.</h4>
        <p>Where Creativity Finds Its Canvas. Our Studio Is A Haven For Innovative Ideas, Bringing Visions To Life With Precision And Passion. With State-Of-The-Art Equipment And A Team Of Skilled Professionals, We Craft Captivating Visuals That Tell Compelling Stories. Whether It's Photography, Videography, Or Audio Production, Our Studio Is Equipped To Deliver Excellence In Every Frame And Note. From Concept To Execution, We Transform Concepts Into Breathtaking Realities That Leave Lasting Impressions. At Exmedia, Creativity Knows No Bounds, And Our Studio Can Convert Imagination Takes It To Another Unexpected Level. Step Into A World Of Boundless Possibilities And Let Your Brand's Story Unfold In Stunning Visual Brilliance.</p>
        </Col>
      <Col>
      <img src={adv2} alt="" style={{marginTop:'10px', marginBottom:'40PX' ,height:'400px'}} />
      </Col>
      </Row>
      </div>
     </div>
     <div>
      <Row>
        <Col>
        <img src={company} alt="" style={{marginTop:'10px', marginBottom:'40PX', width:'800px', height:'450px'}}/>
        </Col>
        <Col>
        <h6>GRAPHICS</h6>
      <h4> DESIGNS THATINSPIRE, CONNECT,AND LEAVE A LASTING IMPRESSION</h4>
      <h6> Introducing Exmedia Graphic Design, where imagination meets design prowess. Our Graphic studio is a playground for innovative ideas, transforming concepts into visually stunning realities. With a skilled team of designers, we craft graphics that captivate and communicate. From logos to intricate designs, our expertise spans a spectrum of visual elements. We merge artistry with strategy, ensuring each design aligns seamlessly with your brand's essence. At Exmedia, we understand the power of visuals to leave indelible impressions. Step into a world of creativity, where every pixel tells a story. Elevate your brand with Exmedia Graphic Design and make your visual identity a masterpiece.</h6>
        </Col>
      </Row>
     </div>
      <div>
        <Row>
          <Col>
          <h6 style={{color:'red'}}>BRANDING</h6>
          <h2>YOUR BRAND, YOUR STORY:WE SHAPE IDENTITIESWITH IMPACT</h2>
          <h6>Welcome to Exmedia Branding, where identities come to life. Our expertise lies in shaping brands that resonate deeply and endure. With a keen understanding of market dynamics, we craft strategic brand identities that leave lasting imprints. From logos to comprehensive brand strategies, our team blends creativity with market insights to create identities that stand out. We believe in the power of authentic storytelling and meaningful connections. At Exmedia, we architect legacies. Step into a world of brand transformation, where every element speaks volumes, and consider all updated strategies to build and ensure the trust of your brand in the respective community or customer. Choose Exmedia Branding to make your mark and forge enduring relationships with your Valuable customer & audience.</h6>
          </Col>
          <Col>
          <img src={pic} alt=""  style={{width:'600px',height:'500px', height:'400px ',marginTop:'10px', marginBottom:'40PX'}}/>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
          <Col>
          <iframe style={{marginTop:'10px', marginBottom:'90PX'}}width="1430" height="426" src="https://www.youtube.com/embed/KoOBdKsTeRQ" title="Graphics can communicate with customers and solve problems I exmedia I studio I graphics I Branding" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </div>
   </>
  )
}

export default Home