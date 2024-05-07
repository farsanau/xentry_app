import React from 'react';
import section4_img1 from '../assets/images/usercardsdance.png';
import section4_img2 from '../assets/images/usercardsfitness.png';
import section4_img3 from '../assets/images/usercardsGymsPhoto.png';
import section4_img4 from '../assets/images/usercardsyoga.png';
import './section4.css';


function Section4() {
  return (
    <div className='section4_images'>
       
        <img src={section4_img1} alt=''/>
        <img src={section4_img2} alt=''/>
        <img src={section4_img3} alt=''/>
        <img src={section4_img4} alt=''/>
    </div>
  )
}

export default Section4;