import { FastForward } from '@mui/icons-material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import React from 'react';

import bsml from "../../../1_images/1_home/2_bsml-txt.png"



const Footer = () => {
    return (



        <div className=' bg-black text-warning p-5 mx-auto border shadow  ' style={{
      
     
              }}>
                    <div className='row  pb-5'>
                    <div className='col-lg-3 col-md-3 d-flex flex-column justify-content-center align-items-center'>
                        <img className='w-75 ' src={bsml} alt="" />
                        <div >
                        <a href="#"><FacebookIcon></FacebookIcon></a>
                       <a href="#"> <TelegramIcon></TelegramIcon></a>
                        <a href="#"><WhatsAppIcon></WhatsAppIcon></a>
                    </div>
                        </div>
                      <div className='col-lg-3 col-md-3 '>
                     
                        <div>
                           
                          <h2>About us</h2>
                          <p>
                          Since 2021, Our institution guiding students and people around the world.
            
            Helping others in every community and region with astonishing facilities.
                          </p>
                        </div>
                        <p><FastForward></FastForward> Jamia Mosque, Bangladesh</p>
                       
                      </div>
            
                      <div className='col-lg-3 col-md-3'>
                        <h2>Quick Links</h2>
                      <div>
                      <a href="#" style={{textDecoration: 'none'}}><p>Privacy Policy</p> </a>
                        <a href="#" style={{textDecoration: 'none'}}><p>Terms And Condition </p></a>
                        <a href="#" style={{textDecoration: 'none'}}><p>Disclaimer</p></a>
                       
                      </div>
                      
                        
                       
            
                      </div>
                      <div className='col-lg-3 col-md-3' >
                        <h4>Contact us</h4>
                        <p>+8801853599236</p>
                        <p>Email: example@gmail.com</p>
                        <address>Uttara 10, Dhaka</address>
                      
                      
                      </div>
                  
                    </div>
                    <hr />
                    <div>
                        <h6>Copyright 2022, All Rights Reserved</h6>
                    </div>
                   
                  </div>
    //     <div className='bg-success  pt-3  ' style={{height:'100%',width:'100%'}} >
    //         <h1>Copyright 2022, All Rights Reserved</h1>
    //         <div  style={{ backgroundImage: `url(${img})`,backgroundRepeat: 'no-repeat',width: '100%',
        
    
    
    //     left: 0,
    //     bottom: 0,
    //     opacity: .8,
       
        
    //   bottom:0}}>
    //         <div className='container bg-white p-5 mx-auto border shadow  ' style={{
      
     
    //   }}>
    //         <div className='row  '>
    //           <div className='col-lg-4 col-md-4 '>
    //             <div>
    //               <h2>About us</h2>
    //               <p>
    //               Since 2021, Our institution guiding students and people around the world.
    
    // Helping others in every community and region with astonishing facilities.
    //               </p>
    //             </div>
    //             <p><FastForward></FastForward> Jamia Mosque, Bangladesh</p>
               
    //           </div>
    
    //           <div className='col-lg-4 col-md-4'>
    //             <h2>Latest Blogs</h2>
    //             <div className='d-flex justify-content-center mb-2'>
    //               <img style={{width:'80px', height:'80px'}} className='img-thumbnail' src={img} alt="" />
    //               <div>
    //                 <p>Ulamma Khubaat On Islam</p>
    //                 <p>Jan 10, 2021</p> 
    //               </div>
    //             </div>
              
                
               
    
    //           </div>
    //           <div className='col-lg-4 col-md-4' >
    //             <h4>Contact us</h4>
    //             <p>+8801853599236</p>
    //             <address>Uttara 10, Dhaka</address>
              
    //           </div>
          
    //         </div>
    //       </div>
    //      </div>
           
    //     </div>
    );
};

export default Footer;