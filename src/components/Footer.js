import React from 'react';
import './footer.css';
import footer_logo from '../assets/images/logo-white.png';
import footer_button_img1 from '../assets/images/GroupplayStore.png';
import footer_button_img2 from '../assets/images/app-store-google-play-seeklogo-02google play.png';

            
            
        

function Footer() {
  return (
    <div className='footer_div'>
        <div className='footer_div1'>
<img className='footer_logo' src={footer_logo} alt=''/>
    <p>website</p>
    <p>mail id</p>
        </div>
        <div className='footer_div2'>
           <p className='footer_small_text'>usefull links</p> 
           <p>App Features</p>
           <p>About us</p>
           <p>Blog posts</p>
           <p>Pricing plans</p>
        </div>
        <div>
            <p className='footer_small_text'>Product help</p>
            <p>Privacy policy</p>
            <p>Terms & conditions</p>
            <p>Refund and Cancellation</p>
            <p>Support</p>
        </div>
        <div className='footer_button_div'>
           <p className='footer_small_text'>download app</p>
           <div className='footer_button_img'>
            <img src={footer_button_img1} alt=''/>
            <img src={footer_button_img2} alt=''/>
           </div>
           <button className='footer_button'>Get Free Trial</button>
        </div>
    </div>
  )
}

export default Footer;