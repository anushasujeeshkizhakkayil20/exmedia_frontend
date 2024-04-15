import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <div style={{height:'300px'}} className='d-flex justify-content-center align-items-center w-100 flex-column'>
    <div className='d-flex justify-content-evenly  align-items-center w-100'>
      <div className='websites' style={{width:'400px'}}>
        <h4 className='mb-3'>
     
           <img style={{height:'50px'}}src="https://media.licdn.com/dms/image/C560BAQESTqXwCBM7sg/company-logo_200_200/0/1680025669373?e=2147483647&v=beta&t=YV3yWJrZfUcn012Eg076gttgGLCVaVN4PDr7Qxg7pt8" alt="" />
            </h4> 
            <h6>Introducing Exmedia Graphic Design, where imagination meets design prowess. Our Graphic studio is a playground for innovative ideas, transforming concepts into visually stunning realities. With a skilled team of designers, we craft graphics that captivate and communicate. From logos to intricate designs, our expertise spans a spectrum of visual elements.</h6>
      </div>
      <div className="link d-flex flex-column">
        <h4 className='mb-3'>Links</h4>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}> HOME</Link>
        <Link to={'/home'} style={{textDecoration:'none', color:'white'}}>ABOUT</Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}>SERVICES</Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}>CONTACT</Link>
      </div>
      <div className="guides d-flex flex-column">
      
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-envelope"></i>INFO MEDIA</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-phone"></i>95266123466 </Link>
        <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}>KERALA & UAE</Link>
        

      </div>
      <div className="contacts d-flex flex-column">
       
        <div className='d-flex mb-2'>
          
        
        </div>
        <div className='d-flex justify-content-evenly align-item-center flex-column'>
        <Link to={'/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-beat-fade fa-2x"></i> </Link>
        <Link to={'/home'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-beat-fade fa-2x"></i></Link>
        <Link to={'/watch-history'}className='justify-content-betweem-evenely' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook   fa-beat-fade fa-2x"></i></Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}> <i class="fa-brands fa-square-instagram fa-beat-fade fa-2x"></i></Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}> <i class="fa-brands fa-square-youtube  fa-beat-fade fa-2x fa-2x"></i></Link>
        <Link to={'/watch-history'} style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-print fa-beat-fade fa-2x"></i></Link>
        </div>
      </div>

    </div>
    <p className='mt-5'>© COPYRIGHT 2023 EXMEDIA</p>
    </div>
    </div>
  )
}

export default Footer