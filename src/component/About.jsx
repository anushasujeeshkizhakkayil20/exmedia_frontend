import React from 'react'
import { Col, Row } from 'react-bootstrap'

function About() {
  return (
   <>
   <div>
  <Row>

    <Col md={6}>
    <img style={{width:'700px',height:'500px'}} className='mt-4 mb-4'  src="https://www.sintef.no/contentassets/b355fb0662464cff87b6a21c8d28846a/digital-isering-header-2000.jpg?width=890&height=500&quality=80&mode=crop&scale=both" alt="" />
    
    </Col>
    <Col md={6}>
    <h4 className='p-4 mt-4 mb-4  ' style={{text:'red'}}>WELCOME EXMEDIA </h4>
    <h1 >BEST SOLUTIONS
& IDEAS FOR
YOU BUSINESS</h1>

     <h6>CREATIVE TEAM  ||  INNOVATION IDEAS  ||  BEST SERVICES</h6>
    </Col>

<Col md={3}>

<h3 className=' mt-2 mb-2 p-5'>WHO WE ARE</h3>

</Col>
  <Col md={9}>
  <h5 className=' mt-2 mb-2 p-5'>
We are a passionate bunch of people Since 2006, Exmedia has been a trailblazing Advertisement agency, driving brand success through innovation, creativity, and strategic excellence. With an illustrious history, we've honed our craft to deliver impactful campaigns that transcend conventional boundaries. From dynamic visuals to compelling narratives, our diverse expertise in advertising, design, and branding has fueled the growth of numerous clients. We're not just an agency; we're your partners in shaping brand legacies. With a deep understanding of market dynamics, consumer behavior, and emerging trends, Exmedia is your compass to navigate the ever-evolving advertising landscape, ensuring your brand remains at the forefront of industry innovation. Your Ultimate Advertisement Company, where innovation meets creativity to redefine your brand's journey. Our agency stands as a pillar of excellence, providing a comprehensive suite of services including Studio, Graphics, and Branding. Step into our cutting-edge studio, a hub of ingenuity where ideas take shape. From brainstorming sessions to concept realization, our team collaborates to bring your vision to life. Our studio is the birthplace of dynamic campaigns that captivate and resonate. Fueling our campaigns is our Graphics team, a powerhouse of visual brilliance. With a keen eye for design and a knack for storytelling, they craft visuals that communicate, inspire, and elevate your brand's identity. Every graphic element is meticulously crafted to leave a lasting impression. At the core of Exmedia is our Branding expertise. We believe in shaping identities that transcend time, echoing your brand's essence. From logo design to comprehensive brand strategies, we forge connections that go beyond the surface, creating meaningful relationships between your brand and its audience. With a portfolio of successful campaigns and satisfied clients, Exmedia takes pride in being your partner on this transformative journey. Our services are more than just transactions – they're collaborations that fuel growth. Join us and experience the synergy of Studio, Graphics, and Branding in perfect harmony, forging brands that stand out in a crowded landscape.</h5>
  </Col>

  <Col md={4} className='mt-4 mb-4 p-5'>

    <h4 className='p-2'>STRATEGY</h4>
    <ol>MARKET RESEARCH AND INSIGHTS</ol>
  <ul>INNOVATIVE CREATIVITY</ul>  
  <ul> CLIENT-CENTRIC APPROACH</ul>
   <ul>  INTEGRATED CAMPAIGNS</ul>
      <ul>INTRERACTION DESIGN</ul>
     <ul> COLLABORATIVE PARTNERSHIPS</ul>
         <ul>TALENT DEVELOPMENT</ul>
        <ul>MEASUREMENT AND OPTIMIZATION</ul>
  </Col>
<Col md={4}  className='mt-4 mb-4 p-5'>
   <h4>EXPERIENCE</h4>
   <ul>BRAND IDENTITY BUILD</ul>
   <ul>BUSINESS DEVELOPMENT</ul>
<ul>DYNAMIC CREATIVE RELEASE</ul>
 <ul>CUSTOMER TRUST BUILDUP</ul>
<ul>CONSISTENT CLIENT ATTRACTION</ul>
</Col>
<Col md={4}  className='mt-4 mb-4 p-5'>
    <h4>MANGEMENT</h4>
<ul>CREATIVE DIRECTION</ul>
 <ul>STRATEGIC THINKING</ul>
 <ul>TEAM LEADERSHIP </ul>
 <ul>COMMUNICATION</ul>
<ul>CLIENT RELATIONSHIP MANAGEMENT</ul>
</Col>
  </Row>

   </div>
   
   
   </>
  )
}

export default About