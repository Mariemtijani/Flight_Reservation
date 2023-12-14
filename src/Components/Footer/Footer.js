import React from 'react'

//imported image
import logo from '../../assests/Images/logo3.png'

//imported icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className=' footerContainer'>
      <div className="footerOne flex">
        <div className="logoDiv grid">
                <img src={logo} alt="" />
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Hic vero iste eum Consectetur voluptate assumenda.</p>
            </div>
            <div className="CompanyDiv grid">
                <h4>Company</h4>
                <span>Suport</span>
                <span>Partners</span>
                <span>Jobs</span>

            </div>

            <div className="servicesDiv grid">
                <h4>Services</h4>
                <span>Flight booking</span>
                <span>Distination</span>
                <span>cheap Tickets</span>
            </div>
            <div className="menuDiv grid">
                <h4>Menu</h4>
                <span>Home</span>
                <span>Explore</span>
                <span>Favorites</span>
            </div>
            <div className="socailDiv grid">
                <h4>Our social media</h4>
                <div className="socialIcon flex">
                <FaFacebookSquare className='icon'/>
                <FaInstagramSquare className='icon ' />
                <FaSquareXTwitter className='icon'/>
                </div>
            </div>
      </div>
      <div className="footerTwo flex">
        <div className="copyRight">
            <span>Copyright 2023 Travel Service.</span>
        </div>
        <div className="others">
            <span>Terms of use</span>
            <span>FAQ</span>
        </div>
      </div>
      
    </div>
  )
}
