import React from 'react';
import "./Nav.css";
import {NavLink} from 'react-router-dom';
import { CiSearch ,CiLogin} from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaBagShopping } from "react-icons/fa6";
import Headroom from "react-headroom";
import { IoPersonCircleOutline } from "react-icons/io5";

export default function Nav() {
  return (
    <>
    <div className='header container'>
      <div>
        <FaPhoneAlt />
        <span>
          +212 625-888666
        </span>
       </div>
     <div>
       <IoMail  />
       <span>
         example@gmail.com
       </span>
      </div>

    </div><Headroom>
    <div className='header2 container'>
<p>msl<span>shop</span></p>
<div className="input_holder">
  <CiSearch id='search'/>
  <input type="search" placeholder='Tap to search ...' />
</div>
<div className='acc_elems'><CiLogin className='icon'/>
<FaBagShopping  className='icon' /></div>

</div >
<nav className='container'>
  <div className='user'>
<IoPersonCircleOutline className='user-icon' />
user
</div>

  <ul>
    <li>
        <NavLink to='/'>home</NavLink>
  </li>
  <li>  <NavLink  to='/about'>about</NavLink>
</li>
<li>  <NavLink  to='/contact'>contact</NavLink>
</li>
  </ul>
</nav>
</Headroom>
    </>
  )
}
