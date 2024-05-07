import React from 'react'

import section3_img from '../assets/images/SpecialPlatform.png';
import './section3.css';

function Section3() {
  return (
    <>
        <div className='section3'>
        <div className='section3_content'>
<h2>Change to the specialized platform</h2>
<p>
Xentrybook stands out as an unparalleled time management application designed to <br/>enhance your revenue and provide seamless access to business metrics,<br/> ensuring a hassle-free experience for serving your clients. Make the shift to Xentrybook <br/>and foster enduring relationships with your clients.
</p>
<ul className='section3_list'>
    <li>Remove queues and paperwork from the reception area.
</li>
    <li>Ensure no overdue memberships with timely renewal reminders.</li>
    <li>Streamline the process for coaches to concentrate more on clients.</li>
    <li>Effectively, conveniently, and swiftly manage clients.</li>
    <li>Restrict any unwanted access & 100% data security</li>
</ul>
<button className='section3_button'>
        Contact us
    </button>
</div>
<div className='section3_img'>
<img src={section3_img} alt=''/>
</div>

        </div>
        
    </>
  )
}

export default Section3;