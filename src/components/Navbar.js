import React  from 'react';

import './navbar.css';
import logo from "../assets/images/logo-dark.png";

function Navbar() {
    return(
        
        
            <div className='navbar'>
            
<img src={logo} alt="Logo" className='logo_image'/>
<div className="Header-Box2">
            <div className="Header-text1">Features</div>
            <div className="Header-text1">How it works</div>
            <div className="Header-text1">FAQ's</div>
            <div className="Header-text1">Contact</div>
          </div>
          <button className='navbar_button'>
            Enquiry
          </button>
        </div>
           
  
    )
}
   


export default Navbar;
;
