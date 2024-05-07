import React from 'react';
import './section2.css';
import section2_img from '../assets/images/phoneOnRock.png'

function Section2() {
  return (
    <div className='Section2'>
        <div className='section2_img'>
        <img className='section2_img' src={section2_img}/>
        </div>
       <div className='section2_content'>
      <h2 className='section2_heading'>
      Packed full of features
      </h2>
      <div className='section2_contents'>
        <div> 
            <h3>Membership Management</h3>
            <p className='section2_info'>Get a glance and manage all the members in an efficient, intelligent and curated way</p>
        </div>
        <div>
            <h3>plan Management</h3>
            <p className='section2_info'>Integrate and refine the subscription plans according to the needs of your clients</p>
        </div>
        <div>
             <h3>Membership Management</h3>
             <p className='section2_info'>
             Get a glance and manage all the members in an efficient, intelligent and curated way
             </p>
        </div>
        <div>
             <h3>Accurate Reporting</h3>
             <p className='section2_info'>Track your business performance with robust metrics and insights right in the app</p>
        </div>
        <div>
             <h3>Whatsapp Auto Reminder</h3>
             <p className='section2_info'>Zero overdue payments with auto membership renewal reminders through WhatsApp</p>
        </div>
        <div>
            <h3>Digital Receipt</h3>
            <p className='section2_info'>Share payment receipts digitally with the client right from the app for accountability</p>
        </div>
     
      
     
     
     
      </div>
      
       </div>
       
    </div>
  )
}

export default Section2;