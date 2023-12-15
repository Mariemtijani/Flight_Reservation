import React, {useState} from 'react'
// impor images 
import logo from '../../assests/Images/logo.png'
import logo1 from '../../assests/Images/logo1.png'
import logo3 from '../../assests/Images/logo2.png'

// import router elements
import { Link } from 'react-router-dom'

//import icons
import {FaHeart} from 'react-icons/fa'
import {TbWorld} from 'react-icons/tb'
import { MdMenu } from "react-icons/md"
import { MdCancel } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import './notif.css'
import { useSelector } from 'react-redux'

const Nav = () => {

  const tickets = useSelector(state => state.PanierReducer.tickets)
  const [active,setActive] = useState('navbarMenu')

  const showMenu = () => {
    setActive('navbarMenu showMenu')
  }

  const removeMenu = () => {
    setActive('navbarMenu')
  }
  return (
    <div>
      <nav>
        <div className="navbar flex">
          {/* SIDE LOGO */}
            <div className="logoDiv flex">
                <img src={logo3}  className='logo'/>
            </div>

            {/* Menu */}

            <div className={active}>
              <MdCancel className='icon cancel' onClick={removeMenu}/>
                <ul className="menu flex">
                    <li  onClick={removeMenu}><Link to='/' className='navLink'>home</Link></li>
                    <li  onClick={removeMenu}><Link to='/Flight_Reservation/explore' className='navLink'>explore</Link></li>
                    <li  onClick={removeMenu}><Link to='/Flight_Reservation/signIn' className='navLink'>sign in</Link></li>
                    <li  onClick={removeMenu}><Link to='/Flight_Reservation/wishlist' className='navLink'><FaHeart className='icon'/></Link></li>
                    <li  onClick={removeMenu}><Link to='/Flight_Reservation/cart' className='navLink'><FaShoppingCart className='icon'/></Link></li>
                 </ul>
                 {tickets.length > 0 ? 
                 (<div className="notification">{tickets.length}</div>) : (null)
                 }
                 
            </div>

            <div className="toggleIcon">
              <MdMenu className='icon' onClick={showMenu}/>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Nav
