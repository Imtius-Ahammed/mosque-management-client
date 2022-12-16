import { FastForward } from '@mui/icons-material';
import React from 'react';
import img from '../../../1_images/2_footer.png'

const KhutbaContact = () => {
  return (
    <div  style={{ backgroundImage: `url(${img})`,backgroundRepeat: 'no-repeat',width: '100vw',
        height: '400px',
    
    
    left: 0,
    bottom: 0,
    opacity: .8,
   
    
  bottom:0}}>
        <div className='container w-lg-50 mx-auto border shadow  mb-5' style={{
  
 
  }}>
        <div className='row'>
          <div className='col-lg-4 col-md-4 '>
            <div>
              <h2>About us</h2>
              <p>
              Since 2021, Our institution guiding students and people around the world.

Helping others in every community and region with astonishing facilities.
              </p>
            </div>
            <p><FastForward></FastForward> Jamia Mosque, Bangladesh</p>
           
          </div>

          <div className='col-lg-4 col-md-4'>
            <h2>Latest Blogs</h2>
            <div className='d-flex justify-content-center mb-2'>
              <img style={{width:'80px', height:'80px'}} className='img-thumbnail' src={img} alt="" />
              <div>
                <p>Ulamma Khubaat On Islam</p>
                <p>Jan 10, 2021</p> 
              </div>
            </div>
            <div className='d-flex justify-content-center  mb-2'>
              <img style={{width:'80px', height:'80px'}} className='img-thumbnail' src={img} alt="" />
              <div>
                <p>Ulamma Khubaat On Islam</p>
                <p>Jan 10, 2021</p> 
              </div>
            </div>
            <div className='d-flex justify-content-center  mb-2'>
              <img style={{width:'80px', height:'80px'}} className='img-thumbnail' src={img} alt="" />
              <div>
                <p>Ulamma Khubaat On Islam</p>
                <p>Jan 10, 2021</p> 
              </div>
            </div>
           

          </div>
          <div></div>
      
        </div>
      </div>
     </div>
  );
};

export default KhutbaContact;