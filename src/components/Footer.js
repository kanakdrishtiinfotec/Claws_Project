import React from 'react';
import "../Style/footer.css";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {

    const phoneNumber1 = '+919582499831'; // Replace with your WhatsApp number
    const message = 'Hello sir!'; // Replace with your message
  
    // Function to format the WhatsApp URL
    const getWhatsAppLink = () => {
      return `https://wa.me/${phoneNumber1}?text=${encodeURIComponent(message)}`;
    };
  
    // Function to handle button click
    const handleWhatsAppButtonClick = () => {
      window.open(getWhatsAppLink(), '_blank');
    };


    const username = 'clawsarmwrestling.in'; // Replace with your Instagram username

  // Function to get the Instagram URL
  const getInstagramLink = () => {
    return `https://www.instagram.com/${username}`;
  };
  const handleInstagramButtonClick = () => {
    window.open(getInstagramLink(), '_blank');  
  };


  const phoneNumber = '+919582499831'; // Replace with your phone number
  const phoneNumber2 = '+9199958464585'; // Replace with your phone number

  // Function to handle button click
  const handlePhoneButtonClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  const handle = () => {
    window.location.href = `tel:${phoneNumber2}`;
  };

  return (
    <div className='Footer_container' >
        <div className="continer pt-4 bg-light d-flex flex-wrap justify-content-center align-items-center" style={{backgroundColor:'blue !important'}}>
            <div className='footer_subcon1'>
                <h4>Get In Touch</h4>
                <p><i className='fa fa-home'></i> B-66/202,Shalimar Garden Extension-2, Ghaziabad, Uttar Pradesh</p>
                <p onClick={handlePhoneButtonClick} style={{cursor:'pointer'}}><i className='fa fa-phone'></i> +91 9582499831</p>
                <p onClick={handle} style={{cursor:'pointer', marginTop:'-10px'}} ><i className='fa fa-phone'> </i>+91 9958464585</p>
            </div>
            <div className='footer_subcon2'>    
                        <h4>Follow Us</h4>
                        <div className='d-flex justify-content-center align-items-center flex-wrap'>
                    <div className='footer_subcon2_logo'>
                        <a href="" style={{color:"black"}}>
                        <IoLogoWhatsapp onClick={handleWhatsAppButtonClick}  style={{fontSize:"2.5rem",marginRight:'0.5rem'}}/>
                        </a>
                    </div>
                    <div className='footer_subcon2_logo'>
                        <a href="" style={{color:"black"}}>
                        <FaInstagram  onClick={handleInstagramButtonClick}  style={{fontSize:"2.5rem",margin:'0.5rem'}}/>
                        </a>
                    </div>
                    <div className='footer_subcon2_logo'>
                        <a href="https://www.youtube.com/@kaushikshiv?si=f7-elaRQdsyLGOjG" style={{color:"black"}}>
                        <FaYoutube  style={{fontSize:"2.5rem",margin:'0.5rem'}}/>
                        </a>
                    </div>
                        </div>
            </div>
            <div className='footer_subcon3'>
                <h4>Company Info</h4>
                <p className='footer_para_heading'><a href="">
                <i class="fa fa-cube mx-1 " style={{color:'black'}} aria-hidden="true"></i>
                <Link to='/about-us'> About Us
                 
                </Link>   
                    </a>
                     </p>
                <p className='footer_para_heading'><a href="">
                <i class="fa fa-cube mx-1 " style={{color:'black'}} aria-hidden="true"></i>
                  <Link to='/privacy-policy'>
                      Privacy Policy
                    </Link> 
                    </a>
                     </p>
                <p className='footer_para_heading'><a href="">
                <i class="fa fa-cube mx-1 " style={{color:'black'}} aria-hidden="true"></i>
                <Link to='/terms-policies'>
                     Terms & Conditions
                    </Link>  


                    </a>
                     </p>

            </div>
            <div className='footer_subcon4'>
            <h4>Purchase Info</h4>
                <p className='footer_para_heading'>
                <i class="fa fa-cube mx-1 " style={{color:'black'}} aria-hidden="true"></i>
                    <a href="">
                    <Link to='/shipping-policy'>
                    Shipping Policy</Link>        
                    </a>
                    </p>
                <p className='footer_para_heading'>
                <i class="fa fa-cube mx-1"  style={{color:'black'}}aria-hidden="true"></i>
                    <a href="">
                    <Link to='/payment-policies'>
                    Payment Policy</Link>    
                    </a>
                    </p>
                <p className='footer_para_heading'>
                <i class="fa fa-cube mx-1 " style={{color:'black'}} aria-hidden="true"></i>
                    <a href="">
                    <Link to='/return-policy'>
                    Return Policy</Link>    
                    </a>
                    </p>

            </div>
        </div>
        <div className='footer_lastcon'>
            <p>&copy; All Right Reserve</p>
            <p>Developed By <a href="https://kanakdrishtiinfo.com/" target='_blank' style={{color:"red",textDecoration:"none"}}>Kanak Drishti Infotech Pvt.Ltd.</a></p>
        </div>

    </div>
  )
}

export default Footer