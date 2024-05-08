import React from "react";
import { Container,Col,Row } from "react-bootstrap";
import Navbar from "./Navbar";
import section1_img from "../assets/images/background.png";
import './section1.css';


const Section1 = ()=>{
    return(
        <Container>
        
        <Navbar/>
        <div className="section1_div">
            <div className="section1_content">
                <h3 className="section_heading1">life will be easy with our</h3>
                <h1 className="section heading1">Entry Managing App</h1>
                <p  className="section1_description">
                XENTRY BOOK is your all-in-one solution for<br/> efficient office management, designed to streamline and<br/> organize your workplace operations.
                </p>
                <button className="section1_button">Download Now</button>
            </div>
         <div>
         <img src={section1_img} alt="" className="section1_img"/>
        </div>   
     
        </div>
       
        
       

        </Container>
    )
        

    
}

export default Section1;